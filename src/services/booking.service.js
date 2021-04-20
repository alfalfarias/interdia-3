import axios from 'axios';
import { api } from '../config/api';
import authService from './auth.service';

const endpoint = `${api.url}/TutenREST/rest/user`;

const bookingService = {
  async getAll({user}) {
    const email = encodeURIComponent(user);

    const headers = {
      'Accept': 'application/json',
      'app': 'APP_BCK',
      'adminemail': user,
      'token': authService.token,
    };

    const http = await axios.get(`${endpoint}/${email}/bookings`, {
      headers: headers,
      params: {
        current: true,
      }
    });
    const response = http.data;
    return response;
  },
};

export default bookingService;