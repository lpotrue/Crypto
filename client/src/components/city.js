import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
 
class City extends Component {
	render () {
    console.log(this.props)
    let weatherData = this.props.weather
  	return(
      
    <Card>
    <Img src={this.props.img}/>
    <Container>
      <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
    </Container>
    </Card>


    )
  }
}
const Img = styled.img`
    width: 100%;
    height: 100%;
  `;

const Container =styled.div`
  padding: 2px 16px;

`;
const Card = styled.div`
    margin: 1rem;
    display: inline-block;
    white-space: nowrap;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 40vh;
    height: 50vh;
    :hover{
       box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    
    }
  `;


 
export default City;
