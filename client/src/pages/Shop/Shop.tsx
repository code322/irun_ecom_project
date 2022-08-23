import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Products from '../../components/Products/Products';
import { getAllProducts } from '../../redux/actions/product/actionsFetchProducts';
import './Shop.scss';
const Shop = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	return (
		<section>
			<div className='bd-container shop-container'>
				<Products />
			</div>
		</section>
	);
};

export default Shop;
