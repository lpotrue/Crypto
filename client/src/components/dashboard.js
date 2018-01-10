import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchWeatherData} from '../actions/weather-data';
import SimpleLineChart from './simpleLineChart';
import City from './city';
import styled from 'styled-components';



export class Dashboard extends React.Component {
    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }
        this.props.dispatch(fetchProtectedData());
        this.props.dispatch(fetchWeatherData());
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
                <SlideShow primary className= "slideshow">
                    <City img="https://i.pinimg.com/736x/9b/a1/3b/9ba13b719829a7fd392e1f6a34b4e81e--australian-art-australian-vintage.jpg"/>
                    <City img="https://i.pinimg.com/736x/14/1f/46/141f4679acab90299ff28ef5409bfb0f--london-poster-london-wall-art.jpg"/>
                    <City img="https://i.pinimg.com/736x/3f/d4/42/3fd4425a814e892c54e5aa456d3edf9f--vintage-art-posters-pennsylvania-railroad.jpg" />
                    <City img="https://i.pinimg.com/736x/3b/62/c8/3b62c83db8285e714e5325a6e951ad97--portland-oregon-oregon-usa.jpg"/>
                </SlideShow>
                <SimpleLineChart name="Lindsay" weather={this.props.weather}/>
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
        weather: state.weather.weather
    };
};

export default connect(mapStateToProps)(Dashboard);
