import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

interface btnTypes {
	text: string;
	url: string;

	txtColor: string;
}
const Button: React.FC<btnTypes> = ({ text, url, txtColor }) => {
	return (
		<Link
			to={url}
			className='reusable-btn'
			style={{
				color: `${txtColor}`,
				cursor: 'pointer',
				transition: 'all 0.3s ease-out',
			}}
		>
			{text}
		</Link>
	);
};

export default Button;
