import axios from 'axios';
import { api } from '../config/api';

const endpoint = `${api.url}/TutenREST/rest/user`;

const JWT_KEY = 'JWT'; 

const authService = {
  get token() {
    return localStorage.getItem(JWT_KEY);
  },
  set token(token) {
    if (token) {
      localStorage.setItem(JWT_KEY, token);
    }
    else {
      localStorage.removeItem(JWT_KEY);
    }
    return token;
  },
  async login({user, password}) {
    const email = encodeURIComponent(user);

    const headers = {
      'Accept': 'application/json',
      'app': 'APP_BCK',
      'password': password,
    };

    const http = await axios.put(`${endpoint}/${email}`, {}, {
      headers: headers,
    });
    const response = http.data;
    localStorage.setItem(JWT_KEY, response.sessionTokenBck);
    return response;
  },
};

export default authService;