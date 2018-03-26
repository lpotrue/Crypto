const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userCoinsSchema = new Schema({
  
    name: String,
    symbol: String,
    user_id: String,
    percent_change_24h: Number,
    percent_change_1h: Number,
    percent_change_7d: Number,
    rank: Number,
    price_usd: Number,
    latest: Number,
    amount: {
    	type: Number,
	}
    

});

module.exports = mongoose.model('UserCoins', userCoinsSchema);