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
	});
});
