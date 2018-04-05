import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
//import {fetchProtectedData} from '../actions/protected-data';
import {fetchCurrencyData} from '../actions/currency-data';
import SimpleLineChart from './simpleLineChart';
import Search from './Search';

//import styled from 'styled-components';



export class Dashboard extends React.Component {
    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }
        //this.props.dispatch(fetchProtectedData());
        this.props.dispatch(fetchCurrencyData());
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
               <Search currency={this.props.currency}/>
                
               </div>
                <SimpleLineChart name="Lindsay" currency={this.props.currency}/>
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
        
        currency: state.currency.currency
    };
};

export default connect(mapStateToProps)(Dashboard);
