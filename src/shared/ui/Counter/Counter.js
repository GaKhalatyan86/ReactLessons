import React, { createElement } from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props?.initialValue ?? 0
    };
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return createElement(
      "div",
      null,
      createElement("button", { className: "btn btn-primary", "data-cy": "increment-input", onClick: this.handleIncrement }, "Increment"),
      createElement("h1", { "data-testid": "counter-input", "data-cy": "counter-input" }, this.state.counter),
      createElement("button", { className: "btn btn-primary", "data-cy": "decrement-input", onClick: this.handleDecrement }, "Decrement"),
    );
  }
}
