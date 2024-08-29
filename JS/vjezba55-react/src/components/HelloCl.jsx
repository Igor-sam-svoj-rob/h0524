import React, { Component } from "react";

class HelloCl extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.ime} {this.props.prezime}
        </p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default HelloCl;
