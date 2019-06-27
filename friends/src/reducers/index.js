import { FETCHING, SUCCESS, FAILURE} from '../actions';

const initialstate = {
    
    friends: [],
    isFetching: false,
    err: ''
}


const reducer = (state = initialstate, action) => {
    switch(action.type) {
        case FETCHING:
            return {
                ...state,
                isFetching: true,
            }
            case SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    friends: action.payload
                }
                case FAILURE:
                        return {
                            ...state,
                            isFetching: false,
                            err: action.payload
                        }
        default:
            return state
    }
}


export default reducer;




