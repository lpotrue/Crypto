import React, { Component } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../config';



export default class LoaderComponent extends Component {
   constructor(props) {
      super(props);
      this.state = this.state = {API_BASE_URL,
         loading: false
       }
      }
       componentDidMount() 
       {  
         axios.get({API_BASE_URL})
           .then(response => {
             this.setState({
               loading: false
             });
           })
           .catch(error => {
             console.log(error);
           });
       }

   render()
   {
    let load;
    if (this.state.loading) {
      load = 
      <div>
      
        <div className='circleload'>
          <div className='word'>
            Loading...
          </div>
          </div>
        <div className="circ">
        </div>
        <div id='one' className="small">
        </div>
        <div id='two' className="small">
        </div>
        <div id='three'className="small">
        </div>
       </div>
    } 
      return(
      <div>
            {load}
       </div>
      )
   }
}