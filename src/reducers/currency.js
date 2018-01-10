import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data';

const initialState = {
    data: '',
    weather: '',
    error: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_WEATHER':
        console.log(action.data)
          return {
            ...state,
            weather: action.data.hourly.data
          }
        default:
            return state
    }

}
