import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button/SqueryButton/Button';
import { register } from '../../redux/actions/auth/authActions';
import './Register.scss';
const Register: React.FC = () => {
	const [input, setInput] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const dispatch = useDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value,
		});
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
