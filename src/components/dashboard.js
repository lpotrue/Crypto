import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import { bindActionCreators } from 'redux';
//import {fetchProtectedData} from '../actions/protected-data';
import {fetchCurrencyData, fetchYourCoins} from '../actions/currency-data';
import SimpleAreaChart from './SimpleAreaChart';
import Search from './Search';
import {mapCurrency, editCoins} from '../actions/currency-data';
import Add from './Add';
import Decrement from './Decrement';
import Stocks from './Stocks';
//import styled from 'styled-components';



export class Dashboard extends React.Component {
    constructor() {
    super();
    this.state={
      coinData: []
    };
  }
    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }
        
        this.props.dispatch(fetchCurrencyData());
        this.props.dispatch(fetchYourCoins());
       
             
        
       
    }
    componentWillReceiveProps(){
        console.log(this.props.currency)
        
    }
    editCoin = (coin, num) => { 
        this.props.dispatch(editCoins(coin, num));
        console.log("coin", coin, num)
    }

    graphCoin = (coin) => {
       
        console.log(coin, this.props)
        var result = this.props.currency.filter(function( obj ) {
            return obj.name == coin.name;
        });
        result.forEach((coin) =>{ coin.price_usd = Number(coin.price_usd) })
         this.setState({
            coinData: [...result]
        });
         console.log(result)
         console.log(this.props)
        this.props.dispatch(mapCurrency(result));
        //console.log(JSON.stringify(result))
    }
    render() {
        // Only visible to logged in users
        if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        

        return (
            <div className="dashboard">
                <br />
                
                <h2>Type in a currency to track its progress</h2>
                
                <br />
               <div className="search">
               <Search currency={this.props.currency} graphCoin={this.graphCoin}/>
                
               </div>
               <SimpleAreaChart currency={this.props.currency} coinData={this.props.coins}/>
               <h4>{this.props.selectedCoin.name} {this.props.selectedCoin.price_usd}</h4>
               <Stocks yourCoins={this.props.yourCoins} edit={this.editCoin} graphCoin={this.graphCoin}/>
                <Add selectedCoin={this.props.selectedCoin}/>
                <Decrement selectedCoin={this.props.decrementCoin}/>
                
            </div>


        );
    }
}


const mapStateToProps = state => {
    const {currentUser} = state.auth;
    console.log(state);
    return {
        loggedIn: currentUser !== null,
        email: currentUser ? state.auth.currentUser.email : '',
        coins: state.currency.coins,
        currency: state.currency.currency,
        selectedCoin: state.currency.selectedCoin,
        yourCoins: state.currency.yourCoins,
        count: state.counter.count

    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  //increment,
  }, dispatch)

export default connect(
    mapStateToProps, 

    )(Dashboard);
