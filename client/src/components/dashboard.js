import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {fetchCurrencyData, fetchYourCoins} from '../actions/currency-data';
import SimpleAreaChart from './SimpleAreaChart';
import Search from './Search';
import {mapCurrency, editCoins} from '../actions/currency-data';
import Add from './Add';
import Decrement from './Decrement';
import Stocks from './Stocks';
import SimplePieChart from './SimplePieChart';
import RankPieChart from './RankPieChart';
import HourPieChart from './HourPieChart';
import DayPieChart from './DayPieChart';
import WeekPieChart from './WeekPieChart';

import { ScrollTo } from "react-scroll-to";


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
        result.forEach((coin) =>{ coin.price_usd = Number(coin.price_usd), coin.rank = String(coin.rank), coin.percent_change_1h = String(coin.percent_change_1h), coin.percent_change_7d = String(coin.percent_change_7d), coin.percent_change_24h = String(coin.percent_change_24h)})
         this.setState({
            coinData: [...result]
        });
        this.props.dispatch(mapCurrency(result));
       TopscrollTo()
    }

    render() {
        // Only visible to logged in users
        if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        return (
          <div className="dashboard">
            
         
             <section className="stats">
                <a href="#searching" className="arrow-container">
                  <div className="arrow"></div>
                </a>
             
                <h3 id="search">{this.props.selectedCoin.name} {this.props.selectedCoin.symbol}</h3>

                 <div id="rank">
                  <span id="statss"><SimplePieChart id="map" currency={this.props.currency} coinData={this.props.coins}/><span>&#36;</span>{this.props.selectedCoin.price_usd}</span>
                    Price in USD</div>

                <div id="rank1">
                 <span id="stats1"><RankPieChart id="map" currency={this.props.currency} coinData={this.props.coins} graphCoin={this.graphCoin}/><span>&#35;</span>{this.props.selectedCoin.rank}</span>
                   Rank</div>

                <div id="rank3">
                  <span id="stats3"><HourPieChart id="map" currency={this.props.currency} coinData={this.props.coins} graphCoin={this.graphCoin}/>{this.props.selectedCoin.percent_change_1h}<span>&#37;</span></span>
                   1 Hour Change</div>
              <span id="together">
                <div id="rank2">
                   <span id="stats2"><DayPieChart currency={this.props.currency} coinData={this.props.coins}/>{this.props.selectedCoin.percent_change_24h}<span>&#37;</span></span>
                   24 Hour Change</div>
                    
                <div id="rank4">
                  <span id="stats4"><WeekPieChart id="map" currency={this.props.currency} coinData={this.props.coins} graphCoin={this.graphCoin}/>{this.props.selectedCoin.percent_change_7d}<span>&#37;</span></span>
                    7 Day Change</div>
              </span>            
                 <div id="graph">
                   <SimpleAreaChart id="map" currency={this.props.currency} coinData={this.props.coins}/>

                </div>
            </section>
            <div id="tabs">

              
        <section id="searching">
               <h3 id="search">Search</h3>
                <span>&darr;</span>
                  
                <p>Type in a currency to track the progress</p>
              <div id="add-search">
                <Search currency={this.props.currency} graphCoin={this.graphCoin}/><Add selectedCoin={this.props.selectedCoin}/>
              </div>
          </section>
              
              
                
              

               <h3 id="view">Portfolio</h3>
                 <Stocks yourCoins={this.props.yourCoins} edit={this.editCoin} graphCoin={this.graphCoin} selectCoin={this.graphCoin}/><Decrement selectedCoin={this.props.decrementCoin}/>

           
            
         </div>
        </div>

        
          
        );
    }
}
 




  
              {/*<div className="container">
                <div className="feature-progress" aria-hidden="true">
                  <div className="feature-progress-ball-wrap">
                    <div className="feature-progress-ball"></div>
                  </div>



                  <div className="feature-progress-platform"></div>
                  <div className="feature-progress-platform"></div>
                  <div className="feature-progress-platform"></div>
                  <div className="feature-progress-platform"></div>
                  <div className="feature-progress-platform"></div>
                  <div className="feature-progress-platform"></div>
                  <div className="feature-progress-platform"></div>*/}

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
        count: state.counter.count,
        

    };
};
const mapDispatchToProps = dispatch => bindActionCreators({
  
  }, dispatch)

export default connect(
    mapStateToProps, 

    )(Dashboard);
