import React, { useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import './ProductInfo.scss';

interface Props {
	title: string;
	description: string;
}

const ProductInfo: React.FC<Props> = ({ title, description }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='general-info-wrapper'>
			<div
				onClick={() => setIsOpen((prevState) => !prevState)}
				className='general-info-content'
			>
				<p className='sub-title'>{title}</p>
				<button>{isOpen ? <BiMinus /> : <BiPlus />} </button>
			</div>
			<p
				style={{
					maxHeight: isOpen ? '200px' : '0px',
					overflow: 'hidden',
					display: 'block',
					transition: 'all 0.3s ease-out',
				}}
				className='text'
			>
				{description}
			</p>
		</div>
	);
};

export default ProductInfo;
