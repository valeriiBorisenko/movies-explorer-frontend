import './App.css';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import mainApi from '../../utils/Api/mainApi';
import authApi from '../../utils/Api/authApi';
import moviesApi from '../../utils/Api/moviesApi';
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
  const [movies, setMovies] = useState([])
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.token))
  const [errorsApi, setErrorsApi] = useState(false)

  function handleRegisterUser({name, email, password}) {
    authApi
    .postRegisterUser(name, email, password)
    .then(()=> handleLoginUser({ email, password }))
    .catch((message) => { 
      console.log(message) 
      setErrorsApi(true)
    } )
  };

  useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem('token');
      Promise.all([
        authApi.getUserToken(token),
        moviesApi.getMovies(),
      ])
        .then(([
          userData,
          moviesData,
        ]) => {
          setCurrentUser(userData);
          setMovies(moviesData)
        })
        .catch((err) => console.log(err))
    }
  }, [loggedIn]);

  function handleLoginUser({ email, password}) {
    authApi
    .postLoginUser(email, password)
    .then((data) => {
      localStorage.setItem('token', data.token)
      checkTokenUser()
      })
    .then(() => history.push(MOVIES_URL))
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
      }
    } 
  }

  function handleClickLogout(){
    localStorage.clear()
    setLoggedIn(false);
    history.push(MAIN_PAGE_URL);
  };

  function handleUpdateUser({ name, email }){
    mainApi
    .updateUserProfile(name, email)
    .then((res)=> setCurrentUser(res) )
    .catch((err)=>{
      console.log(err) 
     })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route 
            exact path={`${MAIN_PAGE_URL}`}>
            <MainPage 
              loggedIn={loggedIn}
            />
          </Route>
          <ProtectedRoute
            exact path={`${MOVIES_URL}`}
            loggedIn={loggedIn}
          >
            <Movies 
              movies={movies}
            />
          </ProtectedRoute>
          <ProtectedRoute
            exact path={`${SAVED_MOVIES_URL}`}
            loggedIn={loggedIn}
          >
            <SavedMovies />
          </ProtectedRoute>
          <ProtectedRoute
            exact path={`${PROFILE_URL}`}
            loggedIn={loggedIn}
          >
            <Profile
              handleClickLogout={handleClickLogout}
              handleUpdateUser={handleUpdateUser}
            />
          </ProtectedRoute>
          <Route exact path={`${REGISTER_URL}`}>
            <Register
              browserLocation={browserLocation.pathname}
              onRegisterUser={handleRegisterUser}
              errorsApi={errorsApi}
            />
          </Route>
          <Route exact path={`${LOGIN_URL}`}>
            <Login
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
