import './App.css';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import mainApi from '../../utils/Api/mainApi';
import authApi from '../../utils/Api/authApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import ProtectedRoute from '../ui/ProtectedRoute/ProtectedRoute'
import MainPage from '../Pages/MainPage/MainPage';
import Movies from '../Pages/Movies/Movies';
import SavedMovies from '../Pages/SavedMovies/SavedMovies';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';

import { PAGE_NOT_FOUND_URL, LOGIN_URL, MAIN_PAGE_URL, MOVIES_URL, PROFILE_URL, REGISTER_URL, SAVED_MOVIES_URL } from '../../utils/routes';


function App() {

  const browserLocation = useLocation()
  const history = useHistory()
  const [currentUser, setCurrentUser] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  function handleRegisterUser({name, email, password}) {
    authApi
    .postRegisterUser(name, email, password)
    .then(()=> handleLoginUser({ email, password }))
    .catch((err) => console.log(err))
  };

  function handleLoginUser({email, password}) {
    authApi
    .postLoginUser(email, password)
    .then((data) => {
      localStorage.setItem('token', data.token)
      checkTokenUser()
      })
    .catch((err) => console.log(err))
  };

  function checkTokenUser(){
    if (localStorage.getItem('token')) {
      mainApi.updateToken()
      const token = localStorage.getItem('token');
      if (token) {
        authApi
        .getUserToken(token)
        .then((res) => {
          setLoggedIn(true)
          setCurrentUser(res)
          history.push(MOVIES_URL)
        })
        .catch((err)=> console.log(err))
      } return  
    }
  }

  const handleClickLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setCurrentUser(null);
    history.push(MAIN_PAGE_URL);
  };

  useEffect(() =>{
    checkTokenUser()
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route 
            exact 
            path={`${MAIN_PAGE_URL}`}>
            <MainPage 
              loggedIn={loggedIn}
            />
          </Route>
          <ProtectedRoute
            exact
            path={`${MOVIES_URL}`}
            loggedIn={loggedIn}
          >
            <Movies 
            />
          </ProtectedRoute>
          <ProtectedRoute
            exact
            path={`${SAVED_MOVIES_URL}`}
            loggedIn={loggedIn}
          >
            <SavedMovies />
          </ProtectedRoute>
          <ProtectedRoute
            exact
            path={`${PROFILE_URL}`}
            loggedIn={loggedIn}
          >
            <Profile
              currentUser={currentUser}
              onClick={handleClickLogout}
            />
          </ProtectedRoute>
          <Route path={`${REGISTER_URL}`}>
            <Register
              exact
              browserLocation={browserLocation.pathname}
              onRegisterUser={handleRegisterUser}
            />
          </Route>
          <Route path={`${LOGIN_URL}`}>
            <Login
              exact
              browserLocation={browserLocation.pathname}
              onLoginUser={handleLoginUser}
            />
          </Route>
          <Route path={`${PAGE_NOT_FOUND_URL}`}>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
