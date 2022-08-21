import React, { useState, useEffect } from 'react';

export type loginTypes = {
	email: string;
	password: string;
};
const Login: React.FC = () => {
	const [input, setInput] = useState<loginTypes>({
		email: '',
		password: '',
	});

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setInput({ ...input, [name]: value });
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
							/>
						</div>
						<div className='form-control'>
							<input
								onChange={handleInput}
								type='password'
								placeholder='Password *'
								name='password'
							/>
						</div>
						<button>sign in</button>
					</div>
				</div>
				<div className='block-new-customer flex'>
					<h2 className='title'>Don't have an account?</h2>
					<p>
						Creating an account has many benefits: checkout faster, keep more
						than one address, track orders and more.
					</p>
					<button>Create an account</button>
				</div>
			</div>
		</section>
	);
};

export default Login;
