 import {API_BASE_URL} from '../config';


export const decrementEntry = (entry) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log(authToken);
    console.log(entry);
    return fetch(`${API_BASE_URL}/decrement`, {
        method: 'UPDATE',
        body: JSON.stringify(entry-1),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        console.log(response);
        

      })
}