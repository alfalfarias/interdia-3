import './App.css';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import AppBar from './components/template/AppBar';
import Login from './components/Login';
import BookingList from './components/BookingList';

import authService from './services/auth.service';

import bookingService from './services/booking.service';

const styless = {
  root: {
    backgroundColor: '#cfe8fc',
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: { },
  bookingList: { },
};

function App() {

  let [user, setUser] = useState({
    isAuthenticated: false,
    domain: null,
    email: null,
    fullname: null,
  });

  let [bookmarks, setBookmarks] = useState([]);

  const loginAction = async (username, password) => {
    let credentials = {
      user: username,
      password: password,
    };
    try {
      let response = await authService.login(credentials);
      let user = {
        isAuthenticated: true,
        domain: response.domain,
        email: response.email,
        fullname: `${response.firstName} ${response.lastName}`,
      };
      setUser(user);

      let bookmarksData = await bookingService.getAll({user: user.email});
      setBookmarks(bookmarksData);
    } catch (error) {
      throw error;
    };
  };

  const login = (
    <Container maxWidth="sm" style={styless.login}>
      <Login loginAction={loginAction} />
    </Container>
  );
  const bookingList = (
    <Container style={styless.bookingList}>
      <BookingList rows={bookmarks} />
    </Container>
  );

  return (
    <div>
      <AppBar sessionName={user.fullname}/>

      <Container style={styless.root} maxWidth={false}>
        {user.isAuthenticated ? bookingList : login}
      </Container>
    </div>
  );
}

export default App;
