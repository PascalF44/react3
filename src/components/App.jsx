import React, { Component } from 'react';
import '../style/App.css';
import ListeVide from "./views/ListeVide";
import ListeActive from "./views/ListeActive";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fever courses</h1>
        </header>
        <div className="ListeVide">
          <ListeVide />
        </div>
        <hr />
        <div className="ListeActive">
          <ListeActive />
        </div>
      </div>
    );
  }
}

export default App;
