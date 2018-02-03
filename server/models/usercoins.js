const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userCoinsSchema = new Schema({
  
    name: String,
    symbol: String,
    price_usd: String,
    price_btc: String,
    last_updated: String,
    percent_change_24h: String,
    user_id: String,
    amount: Number,

});

module.exports = mongoose.model('UserCoins', userCoinsSchema);