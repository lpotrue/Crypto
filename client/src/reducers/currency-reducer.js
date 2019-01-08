//const request = require('request');
import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data';


const initialState = {
    data: '',
    currency: {},
    error: null,
    coins: [],
    selectedCoin: {},
    yourCoins: [],
    
    
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_CURRENCY':
          return {
            ...state,
             currency: action.data     
          }
         case 'MAP_CURRENCY':
         return {
            ...state,
            coins: [...action.results],
            selectedCoin: {...action.results[action.results.length-1]}
          }
        case 'YOUR_CURRENCY':
        return {
            ...state,
            yourCoins: [...action.yourCoins]

        }
        
        case 'EDIT':
        return {
            ...state,
            yourCoins: edit_coins (state, action)
        }
        case 'ADD':
        return {
            ...state,
             yourCoins: [action.yourCoins, ...add_coins(state, action)]
        }

        default:
            return state

    }

}

 function edit_coins (state, action){
    let c = []
    for(let i = 0; i < state.yourCoins.length; i++){
      if(state.yourCoins[i]._id != action.yourCoins._id){
        c.push(state.yourCoins[i])
      }
      else{
        c.push(action.yourCoins)
      }
    }
    console.log(c)
    return c
}

function add_coins (state, action){
    let c = []
    for(let i = 0; i < state.yourCoins.length; i++){
      if(state.yourCoins[i]._id != action.yourCoins._id){
        c.push(state.yourCoins[i])
      }
    }
    console.log(c)
    return c
}




/*var latestPrices;

function updatePrices(){
  request({
            url: `https://api.coinmarketcap.com/v1/ticker/?limit=0`,
            json: true
        }, (error, response, body) => {

            latestPrices = body;
            console.log(latestPrices)
            console.log("Jaguar_____")
           
       });

}*/
 
