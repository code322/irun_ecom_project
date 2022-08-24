import {
	RiFacebookFill,
	RiInstagramLine,
	RiPinterestFill,
	RiTwitterLine,
} from 'react-icons/ri';
import './Footer.scss';

const Footer: React.FC = () => {
	return (
		<footer>
			<div className='footer-container bd-container '>
				<div className='footer-top grid'>
					<div>
						<h4 className='title'>about Store</h4>
						<p className='text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Distinctio eius quis aute
						</p>
					</div>
					<div>
						<h4 className='title'>customer service</h4>
						<ul>
							<li>contact us</li>
							<li>return and refund</li>
							<li>terms and conditions</li>
							<li>online store</li>
						</ul>
					</div>
					<div>
						<h4 className='title'>My Profile</h4>
						<ul>
							<li>my account</li>
							<li>checkout</li>
							<li>help </li>
							<li>support</li>
						</ul>
					</div>
					<div className='footer-icons'>
						<h4 className='title'>connect with us</h4>
						<div>
							<RiFacebookFill />

							<RiInstagramLine />
							<RiTwitterLine />
							<RiPinterestFill />
						</div>
					</div>
				</div>
				<div className='footer-bottom'>
					<small>
						&#169; {new Date().getFullYear()} iRun. All rights reserved.
					</small>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
