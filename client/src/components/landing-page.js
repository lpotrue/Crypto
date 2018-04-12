import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';
import RegistrationForm from './registration-form';
//import Stats from './Stats';


export function LandingPage(props) {
  
  
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    
    
    return (
      
            
        <div id="particles">
        <LoginForm/>
       
         
    </div>
   
);
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);








