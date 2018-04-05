import store from './store';
import {fetchCoinPrices} from './actions/currency-data';
import request from 'request';

request({
            url: `https://api.coinmarketcap.com/v1/ticker/?limit=0`,
            json: true
        }, (error, response, body) => {

            store.dispatch(fetchCoinPrices(body))

           
       })