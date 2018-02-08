const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userCoinsSchema = new Schema({
  
    name: String,
    symbol: String,
    user_id: String,
    amount: {
    	type: Number,
    }

});

module.exports = mongoose.model('UserCoins', userCoinsSchema);