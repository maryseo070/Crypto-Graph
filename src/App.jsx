import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      error: null
    };
  }

  componentDidMount() {
    console.log("component mounted")
    this.props.fetchBitcoinPrice();
  }

  render() {
    const { error, data } = this.state;
    if (error) {
      return (<div>error</div>);
    }
    else {
      return (
        <div>
          {this.props.bitcoin.USD}
        </div>
      );
    }
  }
}

App.propTyope = {
  bitcoin: PropTypes.object,
  fetchBitcoinPrice: PropTypes.function
};

App.defaultProps = {
  bitcoin: {}
};


export default App;
