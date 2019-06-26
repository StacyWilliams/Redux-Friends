import React from 'react';
import FriendsListView from './components/FriendsListView';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <h2>Friends List</h2>
          <Link to ='/api/login'>Log In</Link>
          <Route path = '/api/login' component={Login} />
          <PrivateRoute exact path='/api/friends' component={FriendsListView} />
      </div>
     </Router>
    
    );
}

export default App;
