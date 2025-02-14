import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.compoent";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    console.log("Called the constructor");
    this.state = {
      string: "Welcome to React Donald!",
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((value) => {
        console.log(value);
        this.setState({ monsters: value });
      })
      .finally(() => console.log("Done with the fetch"));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>My list of Users</p>
          <CardList monsters={this.state.monsters} />
        </header>
      </div>
    );
  }
}

export default App;
