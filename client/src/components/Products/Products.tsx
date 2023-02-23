import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProduct } from '../../redux/actions/product/actionsFetchProducts';
import { RootState } from '../../redux/rootReducer';
import './Products.scss';

interface Props {
  search?: string;
}

const Products: React.FC<Props> = ({ search }: Props) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.productsReducer);

  const filterProducts = useMemo(() => {
    if (search) {
      let data = products.filter(({ title }) =>
        title.toLowerCase().includes(search.toLowerCase())
      );
      return data;
    } else {
      return products;
    }
  }, [products, search]);

  return (
    <ul
      data-testid='products-list'
      aria-label='products-heading'
      className='product-list'
    >
      {filterProducts.map(({ title, price, gender, _id, images }) => {
        return (
          <li className='product' key={_id} aria-label='productsItem'>
            <Link
              onClick={() => dispatch(getProduct(_id))}
              to={`/product/${_id}`}
            >
              <img src={images[0]} alt='' />
              <div className='product-details'>
                <div className='product-info'>
                  <p className='text'>{title}</p>
                  <p className='gender'>{`${gender}'s Shoes`}</p>
                </div>
                <p className='text price'>${price}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
