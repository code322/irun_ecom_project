import { render, screen, waitFor } from '../../test/setup';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Home from './Home';

describe('home page', () => {
  describe('layout', () => {
    it('renders the homepage', () => {
      render(<Home />);
      const homePage = screen.getByTestId('home-page');
      expect(homePage).toBeInTheDocument();
    });
    it('has products list', () => {
      render(<Home />);
      const productsList = screen.getByTestId('products-list');
      expect(productsList).toBeInTheDocument();
    });
    it('has show now button', () => {
      render(<Home />);
      const shopNowButton = screen.getAllByRole('link', {
        name: /shop now/i,
      })[0];
      expect(shopNowButton).toBeInTheDocument();
    });

    describe('interactions', () => {
      it('redirects to /shop when the shop now button is clicked', async () => {
        render(<Home />);
        const shopNowButton = screen.getAllByRole('link', {
          name: /shop now/i,
        })[0];
        userEvent.click(shopNowButton);
        await waitFor(() => {
          expect(window.location.pathname).toBe('/shop');
        });
      });
    });
  });
});
