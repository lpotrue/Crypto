import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchWeatherDataSuccess = data => ({
    type: 'FETCH_WEATHER',
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchWeatherDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const fetchWeatherData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/weather`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => {
            dispatch(fetchWeatherDataSuccess(data))
            console.log("watermelon")
            console.log(data)
        })
        .catch(err => {
            dispatch(fetchWeatherDataError(err));
        });
};
