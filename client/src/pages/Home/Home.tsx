import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Products from '../../components/Products/Products';
import { getAllProducts } from '../../redux/actions/product/actionsFetchProducts';
import banner from '../../assets/images/running_banner.jpg';
import banner_2 from '../../assets/images/banner_2.jpg';
import banner_3 from '../../assets/images/banner_3.jpg';
import './Home.scss';
import Button from '../../components/Button/Round/Button';
const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);
	return (
		<section className='home'>
			<main className='main-container'>
				<div className='bd-container main-info'>
					<h1 className='title'>flash sale 70% off</h1>
					<p className='text'>
						Fashion is part of the daily air and it changes all the time, with
						all the events. You can see and feel everything in clothes. Start
						shopping now to enjoy exclusive offers!
					</p>

					<Button url='/shop' text='shop now' txtColor='white' />
				</div>
				<div className='img-banner bd-container'>
					<img src={banner} alt='' />
				</div>
			</main>
			<div className='bd-container section collection'>
				<div className='collection-title'>
					<h1>change the trajectory</h1>
					<p className='text'>Define our way forward with Huarache.</p>
					<Button url='/shop' text='shop now' txtColor='white' />
				</div>
				<div className='collection-container '>
					<Products />
				</div>
			</div>
			<div className='bd-container trending'>
				<p className='title'>trending</p>
				<div className='trending-container'>
					<div className='trending-left-content'>
						<img src={banner_2} alt='' />
						<div className='trending-content'>
							<p className='text'>indoor running shoes</p>
							<Button url='/shop' text='shop now' txtColor='black' />
						</div>
					</div>
					<div className='trending-right-content'>
						<img src={banner_3} alt='' />
						<div className='trending-content'>
							<p className='text'>outdoor running shoes</p>
							<Button url='/shop' text='shop now' txtColor='black' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
