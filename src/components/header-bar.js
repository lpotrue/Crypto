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
            logOutButton = (
                <button id="btnn" onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div className="header-bar">
              <h1><span>Just Hodl</span></h1><span><img src="https:/image.ibb.co/jurOAn/bitcoin.jpg" alt="bitcoin" border="0"/></span>
                <h3>{logOutButton}</h3>
                <div className="dashboard-username">
                    {this.props.email}
                    <div id="email">{this.props.result}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
