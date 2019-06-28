import axios from 'axios';
import axiosConfig from '../axiosConfig'
// get friend

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// loging in
export const LOGING_IN = 'LOGING_IN';
export const PROCESSING_LOGIN = 'PROCESSING_LOGIN';
export const LOGINGIN_FAILURE = 'LOGINGIN_FAILURE';

// add new friend
export const ADD_NEW_FRIEND_START = 'ADD_NEW_FRIEND_START';
export const ADD_NEW_FRIEND_SUCCESS = 'ADD_NEW_FRIEND_SUCCESS';
export const ADD_NEW_FRIEND_FAILURE = 'ADD_NEW_FRIEND_FAILURE';


export const getFriends = () => dispatch => {
    dispatch({type: FETCHING })
    axios
        .get('http://localhost:5000/api/friends', axiosConfig)
        .then(res => {
            dispatch({ type: SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: FAILURE, payload: err})
            })

}

export const logInUser = creds => dispatch => {

    dispatch({type: LOGING_IN })
     axios
     .post('http://localhost:5000/api/login' , creds)
     .then(res => {
       dispatch({type: PROCESSING_LOGIN, payload:  localStorage.setItem('token',res.data.payload)})
       })
       .catch(err => {
        dispatch({ type: LOGINGIN_FAILURE, payload: err}) 
       })
    }


export const addFriend = (friend) => dispatch => {
     dispatch({ type: ADD_NEW_FRIEND_START })
     axios
     .post('http://localhost:5000/api/friends', friend, axiosConfig)
     .then(res =>dispatch({ type: ADD_NEW_FRIEND_SUCCESS, payload: res.data}))
        .catch(err =>
         dispatch({ type: ADD_NEW_FRIEND_FAILURE, payload:err}
         ))
    }