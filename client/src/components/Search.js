import React from 'react';
import Autosuggest from 'react-autosuggest';
import moment from 'moment';

const getSuggestions = (value, languages) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : [languages.find(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  )];
};


const getSuggestionValue = suggestion => suggestion.name;
  
const tickFormatter = (tick) => moment(Number(tick) * 1000).format("MMM Do YYYY"); 

const renderSuggestion = suggestion => (
  <div id="suggest">
    {suggestion.name} ({suggestion.symbol})
    <br /><span>&#36;</span>{suggestion.price_usd}
  </div>
);

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }
  addCoin = () =>{
    console.log("addCoin clicked")
  };
  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) =>{
        console.log("onSuggestionSelected", suggestion);
        console.log(this)
      this.props.graphCoin(suggestion)
  };
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  
  onSuggestionsFetchRequested = ({ value }) => {
    console.log('suggestion:', this.props);
    
    this.setState({
      suggestions: getSuggestions(value, this.props.currency)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search Currency', 
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        onSuggestionSelected={this.onSuggestionSelected}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}