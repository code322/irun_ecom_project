import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProduct } from '../../redux/actions/product/actionsFetchProducts';
import { RootState } from '../../redux/rootReducer';
import './Products.scss';
import { priceRangeType } from '../../pages/Shop/Shop';
import { filterProducts } from '../../utils/helpers';

interface Props {
  search?: string;
  gender?: string;
  priceRange?: priceRangeType;
}

const Products: React.FC<Props> = (props: Props) => {
  const { search, gender: selectGender, priceRange } = props;
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.productsReducer);

  const filteredProducts = useMemo(() => {
    let data = filterProducts(search, selectGender, priceRange, products);
    return data;
  }, [products, search, selectGender, priceRange]);

  return (
    <ul
      data-testid='products-list'
      aria-label='products-heading'
      className='product-list'
    >
      {filteredProducts.map(({ title, price, gender, _id, images }) => {
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
