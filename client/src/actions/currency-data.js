import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';


export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchCurrencyDataSuccess = data => ({
    type: 'FETCH_CURRENCY',
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchCurrencyDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const fetchCurrencyData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/currency`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => {
            dispatch(fetchCurrencyDataSuccess(data))
            console.log("watermelon")
            console.log(data)
        })
        .catch(err => {
            dispatch(fetchCurrencyDataError(err));
        });
};


