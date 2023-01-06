import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/SqueryButton/Button';
import { login } from '../../redux/actions/auth/authActions';
import { RootState } from '../../redux/rootReducer';
import { useNavigate } from 'react-router-dom';
import { validEmail as valid } from '../../utils/helpers';
import './Login.scss';

const Login: React.FC = () => {
  type loginTypes = {
    email: string;
    password: string;
  };

  let isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')!);
  const nav = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      nav('/checkout');
    }
  }, [isLoggedIn]);

  const [isValidEmail, setIsValidEmail] = useState<any>(null);
  const [isValidPassword, setIsValidPassword] = useState<any>(null);
  const [input, setInput] = useState<loginTypes>({
    email: '',
    password: '',
  });

  const [error, setError] = useState<boolean>();

  const dispatch = useDispatch();
  const { err } = useSelector((state: RootState) => state.authReducer);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  const validateOnClick = () => {
    if (isValidEmail && isValidPassword) {
      dispatch(login(input));
    }
    if (!isValidEmail) {
      setIsValidEmail(false);
    }
    if (!isValidPassword) {
      setIsValidPassword(false);
    }
  };
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    validateOnClick();
    if (isLoggedIn) {
      nav('/checkout');
    } else if (err) {
      setError(true);
    }
  };

  // validate email
  let validEmail = valid(input.email);
  useEffect(() => {
    const validateInput = () => {
      //validate email
      input.email.length === 0
        ? setIsValidEmail(null)
        : validEmail
        ? setIsValidEmail(true)
        : setIsValidEmail(false);

      // validate password
      input.password.length === 0
        ? setIsValidPassword(null)
        : input.password.length > 6
        ? setIsValidPassword(true)
        : setIsValidPassword(false);
    };
    validateInput();
  }, [input.email, validEmail, input.password]);

  // validate password

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
          <form className='login-content flex form'>
            <div className='form-control'>
              <input
                onChange={handleInput}
                type='text'
                placeholder='Email *'
                name='email'
                value={input.email}
              />
              {isValidEmail === false && (
                <small>Please Enter a Valid E-Mail</small>
              )}
            </div>
            <div className='form-control'>
              <input
                onChange={handleInput}
                type='password'
                placeholder='Password *'
                name='password'
                value={input.password}
              />
              {isValidPassword === false && (
                <small>Please Enter a Valid Password</small>
              )}
            </div>
            <Button handleClick={handleClick} text='sign in' />
            {error && <small>Please Enter a Valid Email and Password</small>}
          </form>
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
