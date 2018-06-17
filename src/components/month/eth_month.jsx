import React, { Component } from 'react';

class ETHMonth extends Component {

  componentDidMount() {
    this.props.fetchETHMonth();
  }

  render() {
    return (
      <div>
        ETH month section
      </div>
    );
  }
}

export default ETHMonth;
