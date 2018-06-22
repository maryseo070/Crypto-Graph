import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.toUnix = this.toUnix.bind(this);
    this.renderData = this.renderData.bind(this);
  }

  updateDate(e) {
    this.setState({date: e.target.value});
  }


  toUnix(time) {
    return Math.round((new Date(time)).getTime() / 1000);
  }

  renderData() {
    if (typeof(this.props.ethDate) === "number") {
      return (
        <div className="eth-data">ETH: ${this.props.ethDate} USD</div>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchETHDate(this.toUnix(this.state.date)).then(
      (result) => console.log(result));
  }



  render() {

    return(
      <div className="form-container" >
        <div>Select a past date to retrieve ETH price for that day</div>
        <form onSubmit={this.handleSubmit}>
          <input className="date-input" type="date" onChange={this.updateDate}></input>
          <input className="submit-input" type="submit"></input>
        </form>
        <div>
          {this.renderData()}
        </div>
      </div>
    );
  }
}

export default Form;
