import { render, screen, waitFor } from '../../test/setup';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

let url = 'http://localhost:5000';
type RequestBody = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
let requestBody: RequestBody = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const server = setupServer(
  rest.post<RequestBody>(
    'http://localhost:5000/api/auth/login',
    (req, res, ctx) => {
      requestBody = req.body;
      return res(
        ctx.status(200),
        ctx.json({ name: 'user', email: 'user@mail.com', id: '1234' })
      );
    }
  )
);

beforeEach(() => {
  server.resetHandlers();
});
beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
afterAll(() => server.close());

describe('Login page', () => {
  describe('layout', () => {
    render(<Login />);
    it('has a header', () => {
      const header = screen.getByRole('heading', {
        name: 'already registered?',
      });
      expect(header).toBeInTheDocument();
    });
    it('has email input field', () => {
      render(<Login />);
      const email = screen.getByPlaceholderText('Email *');
      expect(email).toBeInTheDocument();
    });

    it('has password input field', () => {
      render(<Login />);
      const password = screen.getByPlaceholderText('Password *');
      expect(password).toBeInTheDocument();
    });
    it('should have password type for the password input field', () => {
      render(<Login />);
      const password =
        screen.getByPlaceholderText<HTMLInputElement>('Password *');
      expect(password.type).toBe('password');
    });

    it('has a Sign In an account button', () => {
      render(<Login />);
      const button = screen.getByRole('button', {
        name: /sign in/i,
      });
      expect(button).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    let email, password, button;

    const setup = () => {
      render(<Login />);
      email = screen.getByPlaceholderText('Email *');
      password = screen.getByPlaceholderText('Password *');
      userEvent.type(email, 'user@mail.com');
      userEvent.type(password, 'password');
    };

    it('sends email and password to the backend after clicking sign in button', async () => {
      setup();
      button = screen.getAllByRole('button', { name: /sign in/i })[0];
      userEvent.click(button);
      await waitFor(() => {
        expect(requestBody).toEqual({
          email: 'user@mail.com',
          password: 'password',
        });
      });
    });
  });
});
