import { useState } from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineLogout } from 'react-icons/ai';
import { RiShoppingBagLine } from 'react-icons/ri';
import './Nav.scss';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav>
			<div className='bd-container nav-container'>
				<div className='nav-left-content'>
					<Link className='title' to='/'>
						iRun<span>.</span>
					</Link>
				</div>
				<div className='nav-right-content'>
					<div className={`menu ${isOpen ? 'isOpen' : ''}`}>
						<li onClick={() => setIsOpen(false)}>
							<Link to='/'>home</Link>
						</li>
						<li onClick={() => setIsOpen(false)}>
							<Link to='/shop'>shop</Link>
						</li>
						<li onClick={() => setIsOpen(false)}>
							<Link to='#'>About</Link>
						</li>
						<li onClick={() => setIsOpen(false)}>
							<Link to='#'>Support</Link>
						</li>
						<li onClick={() => setIsOpen(false)}>
							<Link className='account-container' to='/login'>
								<VscAccount />
								{/* <p style={{ fontSize: "13px" }}>account</p> */}
							</Link>
						</li>
					</div>
					<Link to='/cart' className='cart-icon-wrapper'>
						<p className='inCart'>3</p>
						<div className='cart-icon' onClick={() => setIsOpen(false)}>
							<RiShoppingBagLine />
						</div>
					</Link>
					<div
						onClick={() => setIsOpen((preVal) => !preVal)}
						className='burger-icon-container'
					>
						<div className={`burger ${isOpen ? 'isOpen' : ''}`}></div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
