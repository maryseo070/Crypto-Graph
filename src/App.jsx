import React, { Component } from 'react';
import './App.css';

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
    debugger
    const { error, data } = this.state;
    if (error) {
      return (<div>error</div>);
    }
    else {
      return (
        <div>
          no error
        </div>
      );
    }
  }
}

export default App;
