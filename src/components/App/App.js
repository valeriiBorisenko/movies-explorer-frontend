import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
import Movies from '../Pages/Movies/Movies';
import SavedMovies from '../Pages/SavedMovies/SavedMovies';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';

import { pageNotFoundUrl, loginUrl, mainPageUrl, moviesUrl, profileUrl, registerUrl, savedMoviesUrl } from '../../utils/routes';

function App() {

  const browserLocation = useLocation()

  return (
    <div className="app">
      <Switch>
        <Route exact path={`${mainPageUrl}`}>
          <MainPage />
        </Route>
        <Route path={`${moviesUrl}`}>
          <Movies />
        </Route>
        <Route path={`${savedMoviesUrl}`}>
          <SavedMovies />
        </Route>
        <Route path={`${registerUrl}`}>
          <Register
            browserLocation={browserLocation.pathname}
          />
        </Route>
        <Route path={`${loginUrl}`}>
          <Login
            browserLocation={browserLocation.pathname}
          />
        </Route>
        <Route path={`${profileUrl}`}>
          <Profile />
        </Route>
        <Route path={`${pageNotFoundUrl}`}>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
