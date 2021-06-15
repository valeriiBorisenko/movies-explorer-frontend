import './App.css';
import { Route, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Pages/Main/Main'
import { mainPageUrl } from '../../utils/routes';

function App() {

  const browserLocation = useLocation();

  return (
    <div className="app">
      <Header 
        browserLocation={browserLocation.pathname}
      />
      <main className="main">
        <Route path={`${mainPageUrl}`}>
          <Main/>
        </Route>
      </main>
    </div>
  );
}

export default App;
