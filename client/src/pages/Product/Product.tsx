import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/SqueryButton/Button';
import { addToCart } from '../../redux/actions/product/actionCart';
import { getProduct } from '../../redux/actions/product/actionsFetchProducts';
import { RootState } from '../../redux/rootReducer';
import './Product.scss';

const Product = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const product = useSelector(
		(state: RootState) => state.productReducer.product
	);

	useEffect(() => {
		dispatch(getProduct(id));
	}, [id, dispatch]);

	return (
		<section className='product'>
			<div className='bd-container product-container'>
				<div className='product-wrapper'>
					<div className='product-images'>
						<div>product images</div>
					</div>
					<div className='product-info-container'>
						<p className=' title'>{product.title}</p>
						<p className='text'>{product.details}</p>
						<p className='text price'>{`$${product.price}`}</p>
						<div className='btn-qty-container'>
							<Button
								text='Add To Bag'
								handleClick={() => dispatch(addToCart(product))}
							/>
						</div>
						<div className='general-info'>
							<div> product description</div>
							<div> general info</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Product;
