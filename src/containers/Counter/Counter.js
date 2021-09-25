import React, { Component } from "react";
import { connect } from "react-redux";

import CounterOutput from "../../components/CounterOutput/CounterOutput";
import CounterControl from "../../components/CounterControl/CounterControl";
import * as actionTypes from "../../store/actions";

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
        <CounterOutput value={this.props.ctr} />

        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onAddCounter(5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubtractCounter(5)}
        />
        <hr />
        <button type="submit" onClick={this.props.onStoreResult}>
          Store Results
        </button>
        <ul>
          {this.props.storedResults.map((storedResult) => {
            return (
              <li
                key={storedResult.id}
                onClick={() => this.props.onDeleteResult(storedResult.id)}
              >
                {storedResult.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storedResults: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: (val) => dispatch({ type: actionTypes.ADD, value: val }),
    onSubtractCounter: (val) =>
      dispatch({ type: actionTypes.SUBTRACT, value: val }),
    onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, value: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
