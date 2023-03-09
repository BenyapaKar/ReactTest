import React, { Component } from "react";
import "./App.css";
export default class Counter extends Component {
  state = {
    initialCount: this.props.initialCount,
    count: this.props.initialCount,
  };
  setCount = (newValue) => {
    this.setState({ count: newValue });
  };
  render() {
    let initialCount = this.state.initialCount;
    let currentCount = this.state.count;
    return (
      <div className="container">
        <h1>Count: {currentCount}</h1>
        <button className="btn" onClick={() => this.setCount(initialCount)}>Reset</button>
        <button className="btn" onClick={() => this.setCount(currentCount - 1)}>-</button>
        <button className="btn" onClick={() => this.setCount(currentCount + 1)}>+</button>
      </div>
    );
  }
}
Counter.defaultProps = { initialCount: 0 };
