import { render, screen } from '../../test/setup';
import Register from './Register';
import '@testing-library/jest-dom/extend-expect';

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
			const errorMessage = screen.queryByTestId('errorMessage');
			expect(errorMessage).not.toBeInTheDocument();
		});
	});
});
