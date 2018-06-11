import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';
import RegistrationForm from './registration-form';


export function LandingPage(props) {
  
  
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
     <div className="landing"> 
     
      <div className="information">
      
       <div className="info">
          <div className="w3-text-white w3-jumbo w3-center">
           <i className="fa fa-search"></i></div>
          <h3>Search Cryptocurrencies</h3>
          <div className="line"></div>
          <h5> Create an account with us to search more than 1600 cryptocurrencies.</h5>
      </div>
      <div className="info2">
         <div className="w3-text-white w3-jumbo w3-center">
           <i className="fa fa-eye"></i></div>
          <h3>View Stats</h3>
          <div className="line"></div>
          <h5>View the graphed historic statistics of your chosen coin, as well as the rank, percentage change, and more!</h5>
      </div>
      <div className="info3">
         <div className="w3-text-white w3-jumbo w3-center">
           <i className="fa fa-cloud"></i></div>
          <h3>Just Hodl</h3>
          <div className="line"></div>
          <h5>"Hodl" or hold onto cryptocurrency.  Save your chosen cryptocurrencies to track their progress.</h5>
       </div>
       </div> 
        <div className="space">
        </div>
       
         
  </div>
  
);
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);








