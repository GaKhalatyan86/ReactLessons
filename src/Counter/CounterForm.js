import React, { useState } from "react";
import ButtonList from "./ButtonList";

class CounterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }
  handler = (val) => {
    this.setState({ counter: (this.state.counter + val) })
  }

  render() {
    return <div>
      <h2>{this.state.counter}</h2>
      <ButtonList onClickHandler={this.handler} />
    </div>;
  }

}

export default CounterForm

