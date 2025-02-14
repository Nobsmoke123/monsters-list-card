// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.compoent";
import { SearchBox } from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      monsters: [],
    };
    this.filterFn = this.filterFn.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((value) => {
        this.setState({ monsters: value });
      });
  }

  filterFn(value) {
    this.setState({ searchField: value.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <>
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox handleChange={this.filterFn} placeholder="Search Users" />
          <CardList monsters={filteredMonsters} />
        </div>
      </>
    );
  }
}

export default App;
