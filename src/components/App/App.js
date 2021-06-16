import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from '../Pages/Main/Main';
import Movies from '../Pages/Movies/Movies';
import SavedMovies from '../Pages/SavedMovies/SavedMovies';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';

import { pageNotFoundUrl, loginUrl, mainPageUrl, moviesUrl, profileUrl, registerUrl, savedMoviesUrl } from '../../utils/routes';

function App() {

  return (
    <div className="app">
        <Switch>
          <Route exact path={`${mainPageUrl}`}>
            <Main />
          </Route>
          <Route path={`${moviesUrl}`}>
            <Movies />
          </Route>
          <Route path={`${savedMoviesUrl}`}>
            <SavedMovies />
          </Route>
          <Route path={`${registerUrl}`}>
            <Register />
          </Route>
          <Route path={`${loginUrl}`}>
            <Login />
          </Route>
          <Route path={`${profileUrl}`}>
            <Profile />
          </Route>
          <Route path={`${pageNotFoundUrl}`}>
            <PageNotFound/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
