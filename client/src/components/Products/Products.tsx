import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProduct } from '../../redux/actions/product/actionsFetchProducts';
import './Products.scss';
import { selectProducts } from '../../redux/reducers/product/productsReducer';
import { useAppDispatch } from '../../redux/reducers/redux-hooks';

const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useSelector(selectProducts);
  return (
    <ul
      data-testid='products-list'
      aria-label='products-heading'
      className='product-list'
    >
      {products?.map(({ title, price, gender, _id, images }) => {
        return (
          <li className='product' key={_id}>
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
