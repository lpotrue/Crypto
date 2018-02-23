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
             console.log(err)
            dispatch(fetchCurrencyDataError(err));
        });
};
export const mapCurrency = results => ({
    type: "MAP_CURRENCY",
    results
});
//for yourCoins
export const fetchYourCoins = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/yourcoins`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({yourCoins}) => {
            dispatch(yourCurrency(yourCoins))
            console.log("Zebra")
            console.log(yourCoins)
        })

        .catch(err => {
             console.log(err)
            dispatch(fetchCurrencyDataError(err));
        });
};


export const yourCurrency = yourCoins => ({
    type: "YOUR_CURRENCY",
    yourCoins
});
//edit coins
export const editCoins = (coin, num) => (dispatch, getState) => {
    console.log(coin, num)
    let c = {coin: coin, num: num}
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/editcoins`, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
         body: JSON.stringify(c)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({yourCoins}) => {
            //yourCoins[0].amount += num
            dispatch(editCoin(yourCoins))
            console.log("Zebra")
            console.log(yourCoins)
        })

        .catch(err => {
             console.log(err)
            dispatch(fetchCurrencyDataError(err));
        });
};

export const editCoin = (yourCoins) => ({
    type: "EDIT",
    yourCoins
});


