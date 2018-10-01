import React, { Component } from 'react';
import theme from './_countrySelector.scss';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { updateUserCountry, updateShippingInfo, updateBillingInfo } from '../../actions/Actions';
import { ShippingCountries } from '../../data/ShippingData';

const countriesList = Object.keys(ShippingCountries).sort();

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : countriesList.filter(lang =>
    lang.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion}
  </div>
);

class CountrySelector extends Component {
  constructor(props) {
    super(props);

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: this.props.userCountry,
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    this.props.updateUserCountry(suggestionValue);
    this.props.updateBillingInfo('country', suggestionValue);
    this.props.updateShippingInfo('country', suggestionValue);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userCountry !== this.props.userCountry) {
      this.setState({
        value: nextProps.userCountry,
      })
    }
  }


  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Choose or type your country',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions = {suggestions}
        onSuggestionsFetchRequested = {this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested = {this.onSuggestionsClearRequested}
        getSuggestionValue = {getSuggestionValue}
        renderSuggestion = {renderSuggestion}
        inputProps = {inputProps}
        onSuggestionSelected = {this.onSuggestionSelected}
      />
    );
  }
}

CountrySelector.defaultProps = {
  showNotification: true,
}

const mapStateToProps = (state, ownProps) => ({
  userCountry: state.user.userCountry,
})

const mapDispatchToProps = dispatch => ({
  updateUserCountry: newCountry => dispatch(updateUserCountry(newCountry)),
  updateBillingInfo: (key, value) => dispatch(updateBillingInfo(key, value)),
  updateShippingInfo: (key, value) => dispatch(updateShippingInfo(key, value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountrySelector)



// WEBPACK FOOTER //
// ./src/components/index/CountrySelector.js
