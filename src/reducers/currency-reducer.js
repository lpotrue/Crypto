import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data';


const initialState = {
    data: '',
    currency: [],
    error: null,
    coins: [],
    selectedCoin: {},
    yourCoins: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_CURRENCY':
        console.log(action.data)
          return {
            ...state,
            currency: action.data,
            
          }
         case 'MAP_CURRENCY':
        console.log(action)
          return {
            ...state,
            coins: [...action.results],
            selectedCoin: {...action.results[action.results.length-1]}
          }
        case 'YOUR_CURRENCY':
        console.log(action)
        return {
            ...state,
            yourCoins: [...action.yourCoins],

        }
        case 'EDIT':
        console.log(action, state)
        return {
            ...state,
            yourCoins: edit_coins (state, action)

        }
        case 'ADD':
        console.log(action, state)
        //console.log(edit_coins (state, action))
        return {
            ...state,
            //yourCoins: [action.yourCoins, ...state.yourCoins]
             yourCoins: [action.yourCoins, ...add_coins(state, action)]

        }

        default:
            return state

    }

}

 function edit_coins (state, action){
    //let yourCoins = [action.yourCoins, ...state.yourCoins]
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
    //return state.yourCoins.map((coin, i) => coin._id == action.yourCoins._id ? action.yourCoins: coin)
}

function add_coins (state, action){
    //let yourCoins = [action.yourCoins, ...state.yourCoins]
    let c = []
    for(let i = 0; i < state.yourCoins.length; i++){
      if(state.yourCoins[i]._id != action.yourCoins._id){
        c.push(state.yourCoins[i])
      }
    }
    console.log(c)
    return c
    //return state.yourCoins.map((coin, i) => coin._id == action.yourCoins._id ? action.yourCoins: coin)
}

/*function add_coins (state, action){
    return state.yourCoins.map((coin, i) => {
        if (coin._id == action.yourCoins._id){
         let newCoin = action.yourCoins
         newCoin.amount += coin.amount
         if (newCoin.amount < 1){
            newCoin = null
         }
         return newCoin
        } 
        else{
          return coin
        }

    })
    //return state.yourCoins.map((coin, i) => coin._id == action.yourCoins._id ? action.yourCoins: coin)
}*/
  
