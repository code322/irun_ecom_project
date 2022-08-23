import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/SqueryButton/Button';
import CartItem from '../../components/CartItem/CartItem';
import { RootState } from '../../redux/rootReducer';
import './Cart.scss';

type checkoutTypes = {
	subTotal: number;
	taxes: number;
	total: number;
};
const Cart: React.FC = () => {
	const [checkout, setCheckout] = useState<checkoutTypes>({
		subTotal: 0,
		taxes: 0,
		total: 0,
	});

	const nav = useNavigate();
	const cart = useSelector((state: RootState) => state.cartReducer.cart);

	const subTotal: number = cart.reduce(
		(amount, item) => item.price * item.qty + amount,
		0
	);
	const taxes: number = subTotal * 0.13;
	const total: number = subTotal + taxes;
	useEffect(() => {
		setCheckout({
			subTotal: subTotal,
			taxes: Number(taxes.toFixed(2)),
			total: total,
		});
	}, [subTotal, taxes, total]);

	return (
		<section className='cart'>
			<div className='bd-container cart-container section'>
				<div className='cart-items'>
					{cart.map((item) => {
						return (
							<CartItem
								key={item._id}
								title={item.title}
								details={item.details}
								price={item.price}
								images={item.images}
								qty={item.qty}
								inStock={item.inStock}
								_id={item._id}
							/>
						);
					})}
				</div>
				<div className='cart-checkout'>
					<div className='cart-checkout-container'>
						<p className='title'>summary</p>
						<div className='cart-checkout-wrapper'>
							<div className='checkout-left'>
								<p className='text'>subtotal</p>
								<p className='text'>taxes</p>
							</div>
							<div className='checkout-right'>
								<p className='text'>{`$${checkout.subTotal.toFixed(2)}`}</p>
								<p className='text'>{`$${checkout.taxes.toFixed(2)}`}</p>
							</div>
						</div>
						<div className='checkout-bottom'>
							<p className='text'>total</p>
							<p className='text'>{`$${checkout.total.toFixed(2)}`}</p>
						</div>
					</div>
					<div className='checkout-btn-container'>
						<Button text='Check Out' handleClick={() => nav('/checkout')} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cart;
