import { jasonPlaceHolderState} from './initialsState';
import { GET_JASONPLACEHOLDER_REQUEST,
         GET_JASONPLACEHOLDER_SUCCESS,
         GET_JASONPLACEHOLDER_FAILURE,
       } from '../actions/types';

const jasonPlaceHolderReducer = (state = jasonPlaceHolderState, action) => {
    switch (action.type) {
        case GET_JASONPLACEHOLDER_REQUEST:
            return { ...state, fetching: true, error: null };
        
        case GET_JASONPLACEHOLDER_SUCCESS:
            return { ...state, fetching: false, data: action.data };

        case GET_JASONPLACEHOLDER_FAILURE:
            return { ...state, fetching: false, error: action.error };

        default:
            return state;
    }
}

export default jasonPlaceHolderReducer;