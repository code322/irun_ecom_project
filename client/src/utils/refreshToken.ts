import { server_url } from './api';
import axios from 'axios';

export const refreshToken = async () => {
  try {
    await axios.get(`${server_url}/api/auth/refresh`);
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
    return true;
  } catch (error) {
    return false;
  }
};
