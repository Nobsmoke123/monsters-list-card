import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

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
    console.log(
      "Called again because of rerendering triggered because you called setState."
    );
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
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: "Hello Donald!" })}>
            Change Text
          </button>
          <p>My list of Users</p>
          <ul>
            {this.state.monsters.map((monster) => (
              <li key={monster.id}>{monster.name}</li>
            ))}
          </ul>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lear React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
