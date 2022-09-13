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
	});
});
