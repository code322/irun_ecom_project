import React, { useState, useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import {
	removeFromCart,
	adjustQtyCart,
} from '../../redux/actions/product/actionCart';

interface Props {
	title: string;
	details: string;
	price: number;
	images: string[];
	qty: number;
	inStock: number;
	_id: string;
}

const CartItem: React.FC<Props> = ({
	title,
	details,
	price,
	images,
	qty,
	inStock,
	_id,
}) => {
	type qtyType = number;
	const [quantity, setQuantity] = useState<qtyType>(qty);
	const dispatch = useDispatch();

	const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
		setQuantity(Number(event.target.value));
	};

	useEffect(() => {
		dispatch(adjustQtyCart(_id, quantity));
	}, [quantity, dispatch]);
	return (
		<div className='cart-item'>
			<div className='cart-item-left'>
				<div className='image-container'>
					<img src={images[0]} alt='' />
				</div>
				<div className='cart-item-info'>
					<div>
						<h4 className='title'>{title}</h4>
						<p className='text'> {details}</p>
					</div>
					<div>
						<label htmlFor='qty'> quantity</label>
						<select onChange={handleChange} value={quantity} name='qty' id=''>
							{Array.from(Array(inStock).keys()).map((x: number, i) => {
								return (
									<option key={i} value={Number(x + 1)}>
										{x + 1}
									</option>
								);
							})}
						</select>
					</div>
				</div>
			</div>
			<div className='cart-item-right'>
				<p>{`$${price}`}</p>

				<button
					onClick={() => dispatch(removeFromCart(_id))}
					className='delete-icon'
				>
					<AiFillDelete />
				</button>
			</div>
		</div>
	);
};

export default CartItem;
