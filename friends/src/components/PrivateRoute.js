import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import FriendsListView from './FriendsListView';

 const PrivateRoute = ({component: Component,...rest})=> {
  return (
    <Route
       {...rest} 
       render ={props => 
        localStorage.getItem('token') ? (
            <FriendsListView  {...props} />
        ) : (
            <Redirect to='/api/login' />
   ) }
        />
   
  )
}

export default PrivateRoute;
