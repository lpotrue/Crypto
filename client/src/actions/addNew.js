//import axios from 'axios';
// import * as io from 'socket.io-client'; 
// var socket = io('http://localhost:3000'); 
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const sendEntry = (entry) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log(authToken);
    console.log(entry);
    return fetch(`${API_BASE_URL}/add`, {
        method: 'POST',
        body: JSON.stringify({coin: entry, num: entry.amount}),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({yourCoins}) => {
            
            console.log("Cat")
            console.log(yourCoins)
            dispatch(addCoin(yourCoins))
        })

        .catch(err => {
             console.log(err)
        });
   
}
export const addCoin = (yourCoins) => ({
    type: "ADD",
    yourCoins
});