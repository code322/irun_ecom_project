import { render, screen, waitFor, within } from '../../test/setup';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Home from './Home';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { product as responseBodyType } from '../../redux/actions/product/actionTypes';
import { productsData } from '../../test/dummyData';

let responseData: responseBodyType[] = productsData;
let url = 'http://localhost:5000';

const server = setupServer(
  rest.get<responseBodyType>(`${url}/api/products`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(responseData));
  })
);

beforeEach(() => {
  server.resetHandlers();
});
beforeAll(() => server.listen());
afterAll(() => server.close());

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
    it('should render list of 8 products', async () => {
      render(<Home />);
      const list = screen.getByRole('list', { name: /products/i });
      let items: HTMLElement[] = [];
      await waitFor(() => {
        const { getAllByRole } = within(list);
        items = getAllByRole('listitem');
      });
      expect(items.length).toBe(8);
    });
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
