import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { MAIN_PAGE_URL } from '../../../utils/routes';

const ProtectedRoute = ({...props}) =>{
  return(
    <Route>
      {
        ()=> props.loggedIn === true? {...props.children} : <Redirect to={MAIN_PAGE_URL}/>
      }
    </Route>
  )
}

export default ProtectedRoute;
