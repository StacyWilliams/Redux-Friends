import { FETCHING, SUCCESS, FAILURE,LOGING_IN, PROCESSING_LOGIN, LOGINGIN_FAILURE} from '../actions';


const initialstate = {
    
    friends: [],
    isFetching: false,
    err: '',
    isLoggingIn: false,
    token: '',
    err: null
}


const reducer = (state = initialstate, action) => {
    switch(action.type) {
        // friends get endpoint
        case FETCHING:
           return {
               ...state, 
               isFetching: true,
            }
        case SUCCESS:
            return {
                ...state,
                isFetching: false,
                friends: [...state.friends, action.payload]
            }
        case FAILURE:
            return {
                ...state,
                isFetching: false,
                err: action.payload
            }
          // token bullshit

        case LOGING_IN:
            return {
               ...state, 
               isLoggingIn: true,
            }
        case PROCESSING_LOGIN:
            return {
               ...state,
               isLoggingIn: false, 
               token: action.payload,
            }
        case LOGINGIN_FAILURE:
            return {
            ...state,
            isLoggingIn: false, 
            err: action.payload,
            }
        

        default:
            return state
    }
}


export default reducer;




