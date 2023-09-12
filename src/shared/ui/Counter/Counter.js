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
      createElement("button", { className: "btn btn-primary", onClick: this.handleIncrement }, "Increment"),
      createElement("h1", null, this.state.counter),
      createElement("button", { className: "btn btn-primary", onClick: this.handleDecrement }, "Decrement"),
    );
  }
}
