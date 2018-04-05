const request = require('request');
const Coin = require('./models/coins');
//https://api.coinmarketcap.com/v1/ticker/?limit=1000
console.log('Data fecthed');
const mongoose= require('mongoose');
mongoose.connect('mongodb://coins:coins@ds263707.mlab.com:63707/coins');
//mongoose.connect('mongodb://localhost:8080');


var date = new Date();
var daysToDeletion = 3;
var deletionDate = new Date(date.setDate(date.getDate() - daysToDeletion));


return new Promise((resolve, reject) => {
        request({
            url: `https://api.coinmarketcap.com/v1/ticker/?limit=10`,
            json: true
        }, (error, response, body) => {

            console.log(error);
            let everything =[];

            Coin.remove({last_updated : {$lt : deletionDate}}, function(){

                console.log(body)
                for (i=0; i<body.length; i++){
                    let coin = new Coin(
                        body[i]
                    );
                    everything.push(
                        coin.save(function(err){
                            if(err){
                                console.log(err);
                                return;
                            }
                        })
                    )

                }
                Promise.all(everything).then(l => {
                console.log('all done', l)
                setTimeout(function() {
                    console.log('close mongo') 
                    mongoose.connection.close();

                    },5000)
                })
            });
            
           
       });
    })

