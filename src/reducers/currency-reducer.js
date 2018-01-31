import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data';


const initialState = {
    data: '',
    currency: '',
    error: null,
    coins: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_CURRENCY':
        console.log(action.data)
          return {
            ...state,
            currency: action.data
          }
         case 'MAP_CURRENCY':
        console.log(action)
          return {
            ...state,
            coins: [...action.results]
          }
        default:
            return state
    }

}

