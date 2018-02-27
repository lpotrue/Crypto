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
//import Scroll from './react-scroll';
import { ScrollTo } from "react-scroll-to";
//import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
        console.log(document)
       //scrollTo(document, 0, 600);
       //window.scrollTo(0,0)
       //window.scroll({top: 0, left: 0, behavior: 'smooth' });
       TopscrollTo()
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
               <SimpleAreaChart id="map" currency={this.props.currency} coinData={this.props.coins}/>
               <h4>{this.props.selectedCoin.name} {this.props.selectedCoin.price_usd}</h4>
               <Stocks yourCoins={this.props.yourCoins} edit={this.editCoin} graphCoin={this.graphCoin} selectCoin={this.graphCoin}/>
                <Add selectedCoin={this.props.selectedCoin}/>
                <Decrement selectedCoin={this.props.decrementCoin}/>
                
            </div>


        );
    }
}
    function TopscrollTo() {
        if(window.scrollY!=0)
{
    setTimeout(function() {
       window.scrollTo(0,window.scrollY-30);
        TopscrollTo();
    }, 100);
   }
}
    function scrollTo(element, to, duration) {
        console.log("dog")
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
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
