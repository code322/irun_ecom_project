import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/SqueryButton/Button';
import { register } from '../../redux/actions/auth/authActions';
import './Register.scss';
import { validEmail as valid } from '../../utils/helpers';
import { RootState } from '../../redux/rootReducer';
import { useNavigate } from 'react-router-dom';

type inputType = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
};
const Register: React.FC = () => {
	const [input, setInput] = useState<inputType>({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [isValidName, setIsValidName] = useState<boolean | null>(null);
	const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);
	const [isValidPassword, setIsValidPassword] = useState<boolean | null>(null);
	const [isValidConfirmPassword, setIsValidConfirmPassword] = useState<
		boolean | null
	>(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { err } = useSelector((state: RootState) => state.authReducer);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value,
		});
	};

	let validEmail = valid(input.email);
	localStorage.setItem('email', input.email);

	useEffect(() => {
		function validateInput() {
			// validate name
			input.name.length === 0
				? setIsValidName(null)
				: input.name.length > 4
				? setIsValidName(true)
				: setIsValidName(false);

			// validate password
			input.password.length === 0
				? setIsValidPassword(null)
				: input.password.length < 6
				? setIsValidPassword(false)
				: setIsValidPassword(true);

			// validate confirm password
			input.confirmPassword.length === 0
				? setIsValidConfirmPassword(null)
				: input.password === input.confirmPassword
				? setIsValidConfirmPassword(true)
				: setIsValidConfirmPassword(false);
			// validate email
			input.email.length === 0
				? setIsValidEmail(null)
				: validEmail
				? setIsValidEmail(true)
				: setIsValidEmail(false);
		}
		validateInput();
	}, [input.name, input.email, input.confirmPassword, input.password]);

	const validateOnClick = () => {
		if (
			isValidEmail &&
			isValidPassword &&
			isValidName &&
			isValidConfirmPassword
		) {
			dispatch(register(input));
			navigate('/cart');
		}
		if (!isValidEmail) {
			setIsValidEmail(false);
		}
		if (!isValidPassword) {
			setIsValidPassword(false);
		}
		if (!isValidName) {
			setIsValidName(false);
		}
		if (!isValidConfirmPassword) {
			setIsValidConfirmPassword(false);
		}
	};
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		validateOnClick();
	};

	return (
		<section className='register'>
			<div className='bd-container register-container section flex'>
				<h2 className='title'>sign up using your email address</h2>
				<div className='register-content flex'>
					<div className='form-control'>
						<input
							onChange={handleChange}
							type='text'
							placeholder='Name *'
							name='name'
						/>
						{isValidName === false && (
							<small data-testid='errorName'>Please Enter your Full Name</small>
						)}
					</div>
					<div className='form-control'>
						<input
							onChange={handleChange}
							type='text'
							placeholder='Email *'
							name='email'
						/>
						{isValidEmail === false && (
							<small data-testid='errorEmail'>Please Enter a Valid Email</small>
						)}
					</div>

					<div className='form-control'>
						<input
							onChange={handleChange}
							type='password'
							placeholder='Password *'
							name='password'
						/>
						{isValidPassword === false && (
							<small data-testid='errorPassword'>Please Enter a Password</small>
						)}
					</div>
					<div className='form-control'>
						<input
							onChange={handleChange}
							type='password'
							placeholder='Confirm Password *'
							name='confirmPassword'
						/>
						{isValidConfirmPassword === false && (
							<small data-testid='errorRepeatPassword'>
								Password Did Not Match
							</small>
						)}
					</div>
					<Button handleClick={handleClick} text='create an account' />
					{err && <small>{err?.response?.data}</small>}
				</div>
			</div>
		</section>
	);
};

export default Register;
