import axios from 'axios';
axios.defaults.withCredentials = true;

export const server_url: string | undefined =
  'http://localhost:5000' || process.env.REACT_APP_SERVER_URL;
