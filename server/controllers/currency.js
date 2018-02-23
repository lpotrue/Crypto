
//const currency = new Currency(process.env)
const moment = require('moment')
const Coins  = require('../models/coins');
const UserCoins  = require('../models/usercoins');
const request = require('request');
 

// async function
exports.findCurrency = function(req, res, next) {
    console.log('sweet potato 2');
    Coins.find().exec().then(result => {
        return res.json({
            data: result
        });
    }).catch(err => {throw err});
}

exports.findYourCoins = function(req, res, next) {
    console.log(req.user, "Coins")
    UserCoins.find({user_id: req.user.id}).exec().then(result => {
      //loop thru the results array of coins and search the latest price for each one
      result.forEach((coin, index, array)=>{
          let latest = latestPrices.find(
            latestSnapshot => coin.symbol.toLowerCase()==latestSnapshot.symbol.toLowerCase()
          )

          array[index].price_usd = latest.price_usd 
          console.log("The latest price for " + coin.symbol + " is " + latest.price_usd)
        });

      console.log(result);

        return res.json({
            yourCoins: result
        });
    }).catch(err => {throw err});
}


exports.getCurrentPrice = function(req, res, next) {
  let result = latestPrices.find(function(coin){
    return (coin.symbol.toLowerCase() === req.params.symbol.toLowerCase());
  })
  return res.json({data:result});
}

 var latestPrices;

function updatePrices(){
  request({
            url: `https://api.coinmarketcap.com/v1/ticker/?limit=0`,
            json: true
        }, (error, response, body) => {

            //console.log("Updated prices!");
            //console.log(body);
            latestPrices = body;
           
       });
}

updatePrices(); // calls it the first time 
setInterval(updatePrices, 1000 * 60); // Calls it every minute


exports.deleteCurrent = function(req, res, next) {
    console.log(req.user, "Coins")
    UserCoins.find({user_id: req.user.id}).exec().then(result => {
      //loop thru the results array of coins and search the latest price for each one
      result((coin, index, array)=>{
          let decrement = latestPrices.find(
            latestSnapshot => coin.symbol.toLowerCase()==latestSnapshot.symbol.toLowerCase()
          )

          array[index].price_usd = coin.price_usd.decrement - (1)
          console.log("I am subtracting " + "1" +  coin.price_usd)
        });

      console.log(result);

       
    }).catch(err => {throw err});
}

exports.updateCurrency = (req, res) => {

    const updated = {};
    const updateableFields = ['amount', 'buyPrice'];
    updateableFields.forEach(field => {
        if(field in req.body) {
            updated[`currencies.$.${field}`] = req.body[field];
        }
    });
    const userId     = req.user_id;
    const currencyId = req.params.coin.name;
    return User
        .findOneAndUpdate(
            {"_id": userId, "coin.name.amount": currencyId},
            {$set: updated},
            {new: true}
        )
        .exec()
        .then(updatedUser => {
            res.status(201).json(updatedUser.currencies);
        })
        .catch(err => res.status(500).json({message: 'Something went wrong'}));
}

exports.deleteCurrency = (req, res) => {
    console.log("banana!")
    return User
        .findByIdAndUpdate(req.user._id, {
            $pull: {
                'currencies': {"_id": req.params.coin._id}

            }
        }, {new: true})
        .then(updatedUser => {
            res.status(201).json(updatedUser.apiRepr().coins);
        })
        .catch(err => res.status(500).json({message: 'Internal server error'}));
}

exports.editYourCoins = (req, res) => {
    console.log("edit", req.body)
    return UserCoins.findOneAndUpdate({ name: req.body.coin.name, user_id: req.body.coin.user_id }, { $inc: { amount: req.body.num}}, {new: true, upsert: true})
        .exec()
        .then(updatedUser => {
            console.log(updatedUser)
            if (Number(updatedUser.amount) <= 0 ){
              console.log("pumpkin", req.body.coin, req.user.id)
               UserCoins.remove({name: req.body.coin.name, user_id: req.user.id}, 
                function(err, obj) {
                  if (err) throw err;
                  console.log(obj + " document(s) deleted");
              });
            }
            res.status(201).json({yourCoins: updatedUser});
        })
        .catch(err => res.status(500).json({message: 'Something went wrong'}));
    
}


exports.addYourCoins = (req, res) => {
    console.log("add", req.body)
    return UserCoins.findOneAndUpdate({ name: req.body.coin.name, user_id: req.user.id, price_usd: req.body.coin.price_usd, symbol: req.body.coin.symbol }, { $inc: { amount: req.body.num}}, {new: true, upsert: true})
        .exec()
        .then(updatedUser => {
            console.log(updatedUser.amount)
            if (Number(updatedUser.amount) <= 0 ){
              console.log("pumpkin", req.body.coin, req.user.id)
               UserCoins.remove({name: req.body.coin.name, user_id: req.user.id}, 
                function(err, obj) {
                  if (err) throw err;
                  console.log(obj + " document(s) deleted");
              });
            }

            res.status(201).json({yourCoins: updatedUser});
        })
        .catch(err => res.status(500).json({message: 'Something went wrong'}));
    
}



/*exports.findCurrency= async (req, res, next) => {
  try {
    

 var options = {
  "method": "GET",
  "hostname": "min-api.cryptocompare.com/data",
  "path": " ",
};
      
  var request = https.request(options, function (response) {
  var chunks = [];
  response.on("data", function (chunk) {
    chunks.push(chunk);
  });
});

  request.end();*/





















/*const https = require('https');

const darksky = new DarkSky(process.env.DARK_SKY)
const moment = require('moment')

exports.findCurrency= async (req, res, next) => {
	try {
    

 var options = {
  "method": "GET",
  "hostname": "rest.coinapi.io",
  "path": "/v1/assets",
  "headers": {'X-CoinAPI-Key'}
};

  var request = https.request(options, function (response) {
  var chunks = [];
  response.on("data", function (chunk) {
    chunks.push(chunk);
  });
});

  request.end();

    


.get()
      .then(x => { console.log(x) 
       return res.status(200).json({ data: x });
      } )
      //console.log(forecast)
    //res.status(200).json(forecast)
  } catch (err) {
    next(err)
  }
  console.log("elephant")
}*/





// //Add Entry
// // exports.addEntry = function(req, res, next) {
// //   console.log('tangerine');
// //   console.log(req.body);
// //   let entry = new Entry(req.body.entries);
// //   console.log(req.user);
// //   entry.save();
// //   return res.status(200).json({message: 'return this for socket.io'});
// // };
// exports.addEntry = function(req, res, next) {

//   // const authToken = createAuthToken(req.user.apiRepr());
//   console.log('avocado');
//   console.log(req.body);
//   console.log(req.body.entry);
//   // res.json({authToken});
// 	let entry = new Entry(req.body.entry);
// 	//   console.log(req.user);
// 	  entry.save();
// 	  return res.status(200).json({message: 'return this for socket.io'});
// };


// //Find All Entries
// exports.findAllEntries = function(req, res, next) {
// 	console.log('olive');
// 	console.log(req.user);
// 	Entry.find({})
// 		.exec((err, entries) => {
// 	    if (err) {
// 	      res.send({ error: err });
// 	      return next(err);
// 	    }
// 	    return res.status(200).json({ entries: entries });
// 	})
// }

// //Get User
// // exports.findUser = function(req, res, next) {
// // 	console.log(req.user);
// // 	console.log('raspberry');
// // 	Entry.find({})
// // 		.exec((err, entries) => {
// // 	    if (err) {
// // 	      res.send({ error: err });
// // 	      return next(err);
// // 	    }
// // 	    return res.status(200).json({ entries: entries });
// // 	})
// // }


