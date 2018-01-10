import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchCurrencyData} from '../actions/currency-data';
import SimpleLineChart from './simpleLineChart';

import styled from 'styled-components';



export class Dashboard extends React.Component {
    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }
        this.props.dispatch(fetchProtectedData());
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
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>
                <br />
                <script src="https://rawgit.com/mzabriskie/axios/master/dist/axios.min.js"></script>
                <script src="https://rawgit.com/coinapi/coinapi-sdk/master/javascript-rest/coinapi_v1.js"></script>
                <script src="https://rawgit.com/coinapi/coinapi-sdk/master/javascript-rest/example_javascript.js"></script>

                <SimpleLineChart name="Lindsay" currency={this.props.currency}/>
                <Link to="/add">Add Entry</Link>
            </div>
        );
    }
}

const SlideShow =styled.div`
  border: 1px dashed #eee; 
  white-space: nowrap;
  transition: all 1s;
  margin-left: 0px;
  background-color: ${props => props.primary ? 'black' : 'palevioletred'};
  @media (max-width: 1000px) { background: blue; }
  `;


const mapStateToProps = state => {
    const {currentUser} = state.auth;
    console.log(state);
    return {
        loggedIn: currentUser !== null,
        email: currentUser ? state.auth.currentUser.email : '',
        protectedData: state.protectedData.data,
        currency: state.currency.currency
    };
};

export default connect(mapStateToProps)(Dashboard);
