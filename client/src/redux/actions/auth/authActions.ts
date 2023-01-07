// import { loginTypes } from './../../../pages/Login/Login';
import axios from 'axios';
import { Dispatch } from 'redux';
import { actionTypes, Actions } from './authTypes';
import { server_url } from '../../../utils/api';

// login
export const login = (input: any) => async (dispatch: Dispatch<Actions>) => {
  try {
    const { data } = await axios.post(`${server_url}/api/auth/login`, input);
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload: error,
    });
  }
};

// register
export const register = (input: any) => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.post(`${server_url}/api/auth/register`, input);
    dispatch({
      type: actionTypes.REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_FAIL,
      payload: error,
    });
  }
};

// logout
export const logout = () => async (dispatch: Dispatch) => {
  try {
    await axios.get(`${server_url}/api/auth/logout`);
    dispatch({
      type: actionTypes.LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload: error,
    });
  }
};
