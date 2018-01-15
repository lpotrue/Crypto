import React, { Component } from 'react';
import {connect} from 'react-redux';


var Currency = React.createClass({
  getInitialState () {
    return {
      currencies: []
    };
  },
  componentDidMount: function() {
    var component = this;
    var url = 'https://min-api.cryptocompare.com';
    var end = function (error, response) {
        component.setState({currencies:response.body})
        console.log(error);
        console.log(response);
        console.log(req);
    };
    var req = superagent.get(url).end(end);
  },
  render: function() {
    return (
      <div>
        Hello {this.props.name}
        <div>
          superagent result:
          {this.state.currencies.map(function(currency){return(
            <div>{currency.name}</div>
          )})}
        </div>
      </div>
     )
  }
});

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);





/*class Currency extends Component {
    constructor(){
    super();
    this.state = {
      currency: [],

  };
}

  componentDidMount(){

    fetch('https://min-api.cryptocompare.com/')
    .then(results => {
      return results.json();
      }).then(data => {

    let currency = data.results.map((id) =>{
        <div 
         <input type="text" class="form-control quick-search-box" placeholder="Search Currencies"/>
    )
  })
  this.setState({currency: currency});
  console.log("state", this.state.currency);
  })
}

render() { 
  return (
    <div className="container2">
      {this.state.currency}

export default connect()(Currency);
