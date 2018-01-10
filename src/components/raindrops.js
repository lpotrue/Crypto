import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Script from 'react-load-script';

export class Currency extends React.Component {
    componentDidMount() {
    
        //this.props.dispatch(fetchWeatherData());
    }
handleScriptLoad(){
    console.log(this)
}
    render() {
    
        return (
           <div>raindrops

            <canvas id="container" width="800" height="600"></canvas>
            <Script url="https://tympanus.net/Development/RainEffect/js/index.min.js"
            onLoad={this.handleScriptLoad.bind(this)}/>

            

            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    console.log(state);
    return {
        loggedIn: currentUser !== null,
        currency: state.currency.currency
    };
};

export default connect(mapStateToProps)(Currency);
