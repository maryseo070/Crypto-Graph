import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ETHMonth extends Component {
  constructor(props) {
    super(props);
    this.showETHdata = this.showETHdata.bind(this);
  }

  componentDidMount() {
    this.props.fetchETHMonth();
  }

  showETHdata() {
    let eth = this.props.eth;
    if (eth.length > 0) {
      return eth.map( (data) => (
        <ul>
          <li>{data.time}</li>
          <li>{data.close}</li>
          <li>{data.high}</li>
          <li>{data.low}</li>
          <li>{data.open}</li>
        </ul>
      ))
    }
  }

  render() {
    return (
      <div>
        {this.showETHdata()}
      </div>
    );
  }
}

ETHMonth.propType = {
  eth: PropTypes.array,
  fetchETHMonth: PropTypes.func
};

ETHMonth.defaultProps = {
  eth: []
};

export default ETHMonth;
