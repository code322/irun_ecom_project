import { useState } from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineLogout } from 'react-icons/ai';
import { RiShoppingBagLine } from 'react-icons/ri';
import './Nav.scss';
import { RootState } from '../../redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/auth/authActions';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const {
		authReducer: { isLoggedIn },
		cartReducer: { cart },
	} = useSelector((state: RootState) => state);
	let totalItems = 0;
	cart.forEach(({ qty }) => (totalItems += qty));

	const dispatch = useDispatch();

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
							{isLoggedIn ? (
								<Link
									onClick={() => dispatch(logout())}
									className='account-container'
									to='/'
								>
									<AiOutlineLogout />
								</Link>
							) : (
								<Link className='account-container' to='/login'>
									<VscAccount />
								</Link>
							)}
						</li>
					</div>
					<Link to='/cart' className='cart-icon-wrapper'>
						<p className='inCart'>{totalItems}</p>
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
