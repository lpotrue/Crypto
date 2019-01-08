const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config');
const {basicStrategy, jwtStrategy} = require('./strategies');

const router = express.Router();

const jsonParser = bodyParser.json();

const UsersController = require('./users');
const AuthController = require('./auth');
const CurrencyController = require('./currency');



//Register User
router.post('/register', jsonParser, UsersController.register);

//Login User
router.post('/login', passport.authenticate('basic', {session: false}), AuthController.login);

//Refresh Token
router.post('/refresh', passport.authenticate('jwt', {session: false}), AuthController.refresh);

//Add Entry
router.post('/add', [passport.authenticate('jwt', {session: false}), jsonParser], CurrencyController.addYourCoins);

//router.update('/decrement', [passport.authenticate('jwt', {session: false}), jsonParser], UsersController.decrement);
router.post('/editcoins', [passport.authenticate('jwt', {session: false}), jsonParser], CurrencyController.editYourCoins);

router.get('/currency', jsonParser, CurrencyController.findCurrency);

router.get('/latestprices', [passport.authenticate('jwt', {session: false}), jsonParser], CurrencyController.findCurrentPrices);

router.get('/yourcoins', [passport.authenticate('jwt', {session: false}), jsonParser], CurrencyController.findYourCoins);

//router.get('/currentprice/:symbol', jsonParser, CurrencyController.getCurrentPrice);

module.exports = {router, basicStrategy, jwtStrategy};