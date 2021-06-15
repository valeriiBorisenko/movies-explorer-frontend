import './App.css';
import { Route, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Pages/Main/Main';
import Movies from '../Pages/Movies/Movies';
import SavedMovies from '../Pages/SavedMovies/SavedMovies';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';

import { errorUrl, loginUrl, mainPageUrl, moviesUrl, profileUrl, registrationUrl, savedMoviesUrl } from '../../utils/routes';

function App() {

  const browserLocation = useLocation();

  return (
    <div className="app">
      <Header 
        browserLocation={browserLocation.pathname}
      />
      <main className="main">
        <Route exact path={`${mainPageUrl}`}>
          <Main/>
        </Route>
        <Route path={`${moviesUrl}`}>
          <Movies />
        </Route>
        <Route path={`${savedMoviesUrl}`}>
          <SavedMovies />
        </Route>
        <Route path={`${registrationUrl}`}>
          <Register />
        </Route>
        <Route path={`${loginUrl}`}>
          <Login />
        </Route>
        <Route path={`${profileUrl}`}>
          <Profile />
        </Route>
        <Route path={`${errorUrl}`}>
          <PageNotFound />
        </Route>
      </main>
    </div>
  );
}

export default App;
