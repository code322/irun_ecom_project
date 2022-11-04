import { findByText, render, screen, waitFor } from '../../test/setup';
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
  rest.post<RequestBody>(`${url}/api/auth/login`, (req, res, ctx) => {
    if (req.body.email === 'user100@mail.com') {
      return res(
        ctx.status(400),
        ctx.json({ message: 'Please Enter a Valid Email and Password' })
      );
    }
    requestBody = req.body;
    return res(
      ctx.status(200),
      ctx.json({ name: 'user', email: 'user@mail.com', id: '1234' })
    );
  })
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

    const setup = (
      userEmail: string = 'user@mail.com',
      userPassword: string = 'password'
    ) => {
      render(<Login />);
      email = screen.getByPlaceholderText('Email *');
      password = screen.getByPlaceholderText('Password *');
      userEvent.type(email, userEmail);
      userEvent.type(password, userPassword);
    };

    it('displays an error message if the user types an invalid email', () => {
      setup('abc@');
      const errorEmail = screen.queryByText(/Please Enter a Valid E-Mail/i);
      expect(errorEmail).toBeInTheDocument();
    });
    it('does not display an error message if the user types a valid email', () => {
      setup('abc@maiil.com');
      const errorEmail = screen.queryByText(/Please Enter a Valid E-Mail/i);
      expect(errorEmail).not.toBeInTheDocument();
    });

    it('displays an error message if the password is not valid', () => {
      setup('abc@gmail.com', 'pass');
      const errorPassword = screen.queryByText(
        /Please Enter a Valid Password/i
      );
      expect(errorPassword).toBeInTheDocument();
    });
    it('does not display an error message while typing if the password is valid', () => {
      setup('abc@gmail.com', 'pass');
      const errorPassword = screen.queryByText(
        /Please Enter a Valid Password/i
      );
      expect(errorPassword).toBeInTheDocument();
    });

    it('sends email and password to the backend after clicking sign in button', async () => {
      setup();
      button = screen.getByRole('button', { name: /sign in/i });
      userEvent.click(button);
      await waitFor(() => {
        expect(requestBody).toEqual({
          email: 'user@mail.com',
          password: 'password',
        });
      });
    });

    it("displays error if the email doesn't exist", async () => {
      setup('user100@mail.com');
      button = screen.getByRole('button', { name: /sign in/i });
      userEvent.click(button);
      let errorMessage = await screen.findByText(
        'Please Enter a Valid Email and Password'
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
