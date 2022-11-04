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
  });
});
