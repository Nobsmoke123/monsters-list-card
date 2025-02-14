// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.compoent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((value) => {
        this.setState({ monsters: value });
      });
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <>
        <div className="App">
          <input
            type="search"
            placeholder="Search Users"
            onChange={(e) => this.setState({ searchField: e.target.value })}
          />
          <CardList monsters={filteredMonsters} />
        </div>
      </>
    );
  }
}

export default App;
