import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button/SqueryButton/Button';
import { register } from '../../redux/actions/auth/authActions';
import './Register.scss';
import { validEmail as valid } from '../../utils/helpers';

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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value,
		});
	};

	let validEmail = valid(input.email);

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
					</div>
					<div className='form-control'>
						<input
							onChange={handleChange}
							type='text'
							placeholder='Email *'
							name='email'
						/>
					</div>

					<div className='form-control'>
						<input
							onChange={handleChange}
							type='password'
							placeholder='Password *'
							name='password'
						/>
					</div>
					<div className='form-control'>
						<input
							onChange={handleChange}
							type='password'
							placeholder='Confirm Password *'
							name='confirmPassword'
						/>
					</div>
					<Button
						handleClick={() => dispatch(register(input))}
						text='create an account'
					/>
				</div>
			</div>
		</section>
	);
};

export default Register;
