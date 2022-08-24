import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/SqueryButton/Button';
import { login } from '../../redux/actions/auth/authActions';
import { RootState } from '../../redux/rootReducer';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login: React.FC = () => {
	type loginTypes = {
		email: string;
		password: string;
	};

	const nav = useNavigate();

	const dispatch = useDispatch();
	const { isLoggedIn, err } = useSelector(
		(state: RootState) => state.authReducer
	);

	const [input, setInput] = useState<loginTypes>({
		email: '',
		password: '',
	});

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const { value, name } = e.target;
		setInput({ ...input, [name]: value });
	};

	useEffect(() => {
		if (isLoggedIn) {
			nav('/cart');
		}
	}, [isLoggedIn, nav]);
	const handleClick = async () => {
		dispatch(login(input));
	};
	return (
		<section className='login'>
			<div className='bd-container section login-container flex'>
				<div className='block-customer-login flex'>
					<div className='login-heading'>
						<h2 className='title'>already registered?</h2>
						<p className='text'>
							If you have an account, sign in with your email address.
						</p>
					</div>
					<div className='login-content flex'>
						<div className='form-control'>
							<input
								onChange={handleInput}
								type='text'
								placeholder='Email *'
								name='email'
								value={input.email}
							/>
						</div>
						<div className='form-control'>
							<input
								onChange={handleInput}
								type='password'
								placeholder='Password *'
								name='password'
								value={input.password}
							/>
						</div>
						<Button handleClick={handleClick} text='sign in' />
						{err && <small>Please Enter a Valid Email and Password</small>}
					</div>
				</div>
				<div className='block-new-customer flex'>
					<h2 className='title'>Don't have an account?</h2>
					<p>
						Creating an account has many benefits: checkout faster, keep more
						than one address, track orders and more.
					</p>
					<Button
						text='Create an account'
						handleClick={() => nav('/register')}
					/>
				</div>
			</div>
		</section>
	);
};

export default Login;
