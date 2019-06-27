import axios from 'axios';

export const FETCHING = 'FETCHING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

const getFriends = () => dispatch => {
    dispatch({type: FETCHING })
    axios
        .get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({ type: SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: FAILURE, payload: err})
            })
}

export default getFriends;