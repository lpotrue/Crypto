import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import styler from 'react-styling'
 

import Particles from 'react-particles-js';
 
class App extends Component{
  
    
        return (
            <Particles
              params={{
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 5
                    }
                  }
                }
              }}
              style={{
                width: '100%'
                
              }}
              )
            />
   
   
 

    
  	


export default connect()(Particles);
