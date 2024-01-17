import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Content-Type'] = 'application/json';

export const server_url: string | undefined =
  process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : process.env.REACT_APP_SERVER_URL;
