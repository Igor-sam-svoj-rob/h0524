import React, { Component } from "react";

export default class ListaKartica extends Component {
  render() {
    const { filter } = this.props;
    return (
      <div className="kartice">
        {filter.map((osoba) => (
          <div key={osoba.id}>
            <p>{osoba.first_name}</p>
            <img src={osoba.avatar} alt={osoba.first_name} />
          </div>
        ))}
      </div>
    );
  }
}
