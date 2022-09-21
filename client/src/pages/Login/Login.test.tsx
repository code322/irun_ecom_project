import { render, screen } from '../../test/setup';
import Login from './Login';

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

		it('has a Sign In an account button', () => {
			render(<Login />);
			const button = screen.getByRole('button', {
				name: /sign in/i,
			});
			expect(button).toBeInTheDocument();
		});
	});
});
