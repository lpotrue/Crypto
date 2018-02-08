
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

            console.log("Updated prices!");
            //console.log(body);
            latestPrices = body;
           
       });
}

updatePrices(); // calls it the first time 
setInterval(updatePrices, 1000 * 60); // Calls it every minute





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


