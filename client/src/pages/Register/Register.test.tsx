import { render, screen, waitFor } from '../../test/setup';
import Register from './Register';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

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
		'http://localhost:5000/api/auth/register',
		(req, res, ctx) => {
			requestBody = req.body;

			return res(
				ctx.status(401),
				ctx.json({ message: 'Incorrect credentials' })
			);
		}
	)
);

beforeEach(() => {
	server.resetHandlers();
});
beforeAll(() => server.listen());
afterAll(() => server.close());

describe('Register page', () => {
	describe('layout', () => {
		it('has a header', () => {
			render(<Register />);
			const header = screen.getByRole('heading', {
				name: 'sign up using your email address',
			});

			expect(header).toBeInTheDocument();
		});

		it('has name input field', () => {
			render(<Register />);

			const name = screen.getByPlaceholderText('Name *');
			expect(name).toBeInTheDocument();
		});

		it('has email input field', () => {
			render(<Register />);

			const email = screen.getByPlaceholderText('Email *');
			expect(email).toBeInTheDocument();
		});
		it('has password input field', () => {
			render(<Register />);

			const password = screen.getByPlaceholderText('Password *');
			expect(password).toBeInTheDocument();
		});
		it('has conform password input field', () => {
			render(<Register />);

			const conformPassword = screen.getByPlaceholderText('Confirm Password *');
			expect(conformPassword).toBeInTheDocument();
		});

		it('has a create an account button', () => {
			render(<Register />);
			const button = screen.getByRole('button', {
				name: 'create an account',
			});
			expect(button).toBeInTheDocument();
		});

		it('has password type for the password input field', () => {
			render(<Register />);
			const password = screen.getByPlaceholderText(
				'Password *'
			) as HTMLInputElement;
			expect(password.type).toBe('password');
		});
		it('has password type for the confirm password input field', () => {
			render(<Register />);
			const password = screen.getByPlaceholderText(
				'Confirm Password *'
			) as HTMLInputElement;
			expect(password.type).toBe('password');
		});
	});

	describe('interactions', () => {
		it('should not display an error message if the create an account button is not click and the input fields are empty', () => {
			render(<Register />);
			const errorName = screen.queryByTestId('errorName');
			expect(errorName).not.toBeInTheDocument();
			const errorPassword = screen.queryByTestId('errorPassword');
			expect(errorPassword).not.toBeInTheDocument();
			const errorEmail = screen.queryByTestId('errorEmail');
			expect(errorEmail).not.toBeInTheDocument();
			const errorRepeatPassword = screen.queryByTestId('errorRepeatPassword');
			expect(errorRepeatPassword).not.toBeInTheDocument();
		});

		it('displays an error message if the user types an invalid email', () => {
			render(<Register />);
			const emailField = screen.getByPlaceholderText('Email *');
			userEvent.type(emailField, 'myemail@');
			const errorEmail = screen.queryByTestId('errorEmail');
			expect(errorEmail).toBeInTheDocument();
		});
		it('does not display an error message if the email is valid', () => {
			render(<Register />);
			const emailField = screen.getByPlaceholderText('Email *');
			userEvent.type(emailField, 'myemail@mail.com');
			const errorEmail = screen.queryByTestId('errorEmail');
			expect(errorEmail).not.toBeInTheDocument();
		});
		it('does not display an error message if the password is valid', () => {
			render(<Register />);
			const passwordField = screen.getByPlaceholderText('Password *');
			userEvent.type(passwordField, 'P4ssword');
			const errorPassword = screen.queryByTestId('errorPassword');
			expect(errorPassword).not.toBeInTheDocument();
		});
		it('displays an error message if the password is not valid', () => {
			render(<Register />);
			const passwordField = screen.getByPlaceholderText('Password *');
			userEvent.type(passwordField, 'P4ssw');
			const errorPassword = screen.queryByTestId('errorPassword');
			expect(errorPassword).toBeInTheDocument();
		});
		it('does not displays an error message if the passwords match', () => {
			render(<Register />);
			const passwordField = screen.getByPlaceholderText('Password *');
			userEvent.type(passwordField, 'P4ssword');
			const confirmPasswordField =
				screen.getByPlaceholderText('Confirm Password *');
			userEvent.type(confirmPasswordField, 'P4ssword');
			const errorRepeatPassword = screen.queryByTestId('errorRepeatPassword');
			expect(errorRepeatPassword).not.toBeInTheDocument();
		});
		it('displays an error message if the passwords do not match', () => {
			render(<Register />);
			const passwordField = screen.getByPlaceholderText('Password *');
			userEvent.type(passwordField, 'P4sswords');
			const confirmPasswordField =
				screen.getByPlaceholderText('Confirm Password *');
			userEvent.type(confirmPasswordField, 'P4ssword');
			const errorRepeatPassword = screen.queryByTestId('errorRepeatPassword');
			expect(errorRepeatPassword).toBeInTheDocument();
		});

		it('displays error messages if the user clicks the create an account button while all input fields are empty', () => {
			render(<Register />);
			const button = screen.getByRole('button', { name: 'create an account' });
			userEvent.click(button);
			const errorName = screen.queryByTestId('errorName');
			expect(errorName).toBeInTheDocument();
			const errorPassword = screen.queryByTestId('errorPassword');
			expect(errorPassword).toBeInTheDocument();
			const errorEmail = screen.queryByTestId('errorEmail');
			expect(errorEmail).toBeInTheDocument();
			const errorRepeatPassword = screen.queryByTestId('errorRepeatPassword');
			expect(errorRepeatPassword).toBeInTheDocument();
		});

		it("sends the user's data to the backend after clicking the create an account button", async () => {
			render(<Register />);
			const name = screen.getByPlaceholderText('Name *');
			const email = screen.getByPlaceholderText('Email *');
			const password = screen.getByPlaceholderText('Password *');
			const confirmPassword = screen.getByPlaceholderText('Confirm Password *');
			const button = screen.getByRole('button', {
				name: 'create an account',
			});
			userEvent.type(name, 'john doe');
			userEvent.type(email, 'user100@gmail.com');
			userEvent.type(password, 'password');
			userEvent.type(confirmPassword, 'password');
			userEvent.click(button);
			await new Promise((resolve) => setTimeout(resolve, 500));

			expect(requestBody).toEqual({
				name: 'john doe',
				email: 'user100@gmail.com',
				password: 'password',
				confirmPassword: 'password',
			});
		});
	});
});
