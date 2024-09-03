import React, { Component } from "react";

export default class SearchPolje extends Component {
  render() {
    const { handleFilterChange } = this.props;
    return (
      <input
        type="search"
        className="search-box"
        placeholder="Pretraži"
        onChange={handleFilterChange}
      />
    );
  }
}
