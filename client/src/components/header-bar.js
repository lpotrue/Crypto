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
        return (
            <div className="header-bar">
               
                  <li><div id="lo">{logOutButton}</div></li>
              <div id="just">
                <span><h1>Just Hodl</h1></span>
                <span><img src="https:/image.ibb.co/jurOAn/bitcoin.jpg" alt="bitcoin" border="0"/></span>
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
