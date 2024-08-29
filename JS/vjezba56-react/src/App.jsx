import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      ime: "Igor",
    };
  }
  render() {
    return (
      <div className="App">
        <p>Pozz {this.state.ime}</p>
      </div>
    );
  }
}
