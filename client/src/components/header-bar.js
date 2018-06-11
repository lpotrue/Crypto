import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser, setAuthToken} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(setCurrentUser(null));
        this.props.dispatch(setAuthToken(null));
        clearAuthToken();
    }
   
         
    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            <div>{this.props.email}</div>
            logOutButton = (
                

                <button id="btnnn" onClick={() => this.logOut()}>LOG OUT</button>
                );
        }
        let home;
           if (!this.props.loggedIn){
            home =(
              <div className="on">
               <div className="links">
                 <li><button id="si"><a href="/register" className="si">Sign up</a></button></li>
                 <li><button id="si2"><a href="/login" className="si2">Sign In</a></button></li>
                </div> 
                 
            </div>
        
            );    
           }
        let house;
           if (!this.props.loggedIn){
            house =(
            <div className="houses">
             <div className="w3-text-white w3-xxxlarge">
                  <li><a id="home" href="/"><i className="fa fa-home"></i></a></li>
              </div>
              </div>
         );    
           }
        return (
            <div className="header-bar">
              <div id="home">{home}</div>
              <div id="house">{house}</div>
              <li><div id="lo">{logOutButton}</div></li>
              <div id="just">
                <h1>Just Hodl</h1>
                <div id="img"></div>
              </div>

                <div className="dashboard-username">
                    {this.props.email}
                </div>
            </div>

        );

}
}



const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
