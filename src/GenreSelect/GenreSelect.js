import React, { createElement } from "react"
import GenreSelect from "../GenreSelect/GenreSelect";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return createElement(
      "div",
      { className: "input-group" },
      createElement("div", { className: "input-group" },
        createElement("input", { className: "form-control", type: "text", value: this.props.searchText }),
        createElement("button", { className: "btn btn-primary" }, "Search")

      ))
  }
}

export default SearchForm
