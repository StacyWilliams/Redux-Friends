import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {friendReducer} from './reducer/reducer'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import {BrowserRouter as Router} from 'react-router-dom'

const store = createStore(

    friendReducer,
    applyMiddleware(thunk,logger)
)

ReactDOM.render(
    
   <Provider store ={store}>
        <Router>
            <App />
        </Router>
   </Provider>,
   document.getElementById('root'));



