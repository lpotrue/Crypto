import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
//import {fetchProtectedData} from '../actions/protected-data';
import {fetchCurrencyData} from '../actions/currency-data';
import SimpleLineChart from './simpleLineChart';
import Search from './Search';
import {mapCurrency} from '../actions/currency-data';

//import styled from 'styled-components';



export class Dashboard extends React.Component {
    constructor() {
    super();
    this.state = {
      coinData: []
    };
  }
    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }
        //this.props.dispatch(fetchProtectedData());
        this.props.dispatch(fetchCurrencyData());
    }
    graphCoin = (coin) => {
       
        //console.log(coin, this.props)
        var result = this.props.currency.filter(function( obj ) {
            return obj.name == coin.name;
        });
        result.forEach((coin) =>{ coin.price_usd = Number(coin.price_usd) })
         this.setState({
            coinData: [...result]
        });
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
                <div className="dashboard-username">
                    Email: {this.props.email}
                </div>
                
                <br />
               <div className="search">
               <Search currency={this.props.currency} graphCoin={this.graphCoin}/>
                
               </div>
               <SimpleLineChart currency={this.props.currency} coinData ={this.props.coins}/>
                <Link to="/add">Add Entry</Link>
                
            
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
        currency: state.currency.currency
    };
};

export default connect(mapStateToProps)(Dashboard);
