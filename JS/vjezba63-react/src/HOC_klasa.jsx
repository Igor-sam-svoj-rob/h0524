import React from "react";

const HOC = (Komponenta, ekstenzija) => {
  return class extends React.Component {
    state = {
      podaci: [],
      upit: "",
    };

    componentDidMount() {
      fetch(`https://jsonplaceholder.typicode.com/${ekstenzija}`)
        .then((res) => res.json())
        .then((data) => this.setState({ podaci: data }));
    }

    handleChange = (event) => {
      this.setState({ ...this.state, upit: event.target.value });
    };

    render() {
      let { podaci, upit } = this.state;
      let filterPodaci = podaci;

      if (ekstenzija === "posts") {
        filterPodaci = podaci.slice(0, 10);
      }

      filterPodaci = filterPodaci.filter((podatak) => {
        if (ekstenzija === "users") {
          const { name } = podatak;
          return name.toLowerCase().indexOf(upit.toLowerCase()) >= 0;
        }
        if (ekstenzija === "posts") {
          return podatak.title.toLowerCase().indexOf(upit.toLowerCase()) >= 0;
        }
        return true; // Ako ekstenzija nije "posts" ili "users" vratimo sve podatke...
      });

      return (
        <>
          <input type="text" value={upit} onChange={this.handleChange} />
          <Komponenta podaci={filterPodaci} />
        </>
      );
    }
  };
};

export default HOC;
