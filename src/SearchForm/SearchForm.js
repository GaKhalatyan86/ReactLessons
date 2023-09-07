import react, { createElement } from "react";

const geners = ['Action', 'Comedy', 'Drama', 'Fantasy'];

class GenreSelect extends react.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return createElement(
      "ul",
      { className: "nav" },
      createElement("li", { className: "nav-item" },
        this.props.data.map((date, i) =>
          createElement("button", { className: "btn btn-primary", key: i }, date))));
  }
}
export default GenreSelect