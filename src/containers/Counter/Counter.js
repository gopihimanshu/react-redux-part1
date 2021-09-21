import React, { Component } from "react";

import CounterOutput from "../../components/CounterOutput/CounterOutput";
import CounterControl from "../../components/CounterControl/CounterControl";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  counterChangeHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.state.counter} />

        <CounterControl
          label="Increment"
          clicked={() => this.counterChangeHandler("inc")}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.counterChangeHandler("dec")}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.counterChangeHandler("add", 5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.counterChangeHandler("sub", 5)}
        />
      </div>
    );
  }
}

export default Counter;
