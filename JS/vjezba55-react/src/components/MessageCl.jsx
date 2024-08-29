import React, { Component } from "react";

export default class MessageCl extends Component {
  constructor() {
    super();
    this.state = {
      poruka: "Pozz korisniče",
    };
  }
  render() {
    return <p>{this.state.poruka}</p>;
  }
}
