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
	});
});
