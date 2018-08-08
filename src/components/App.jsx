import React, { Component } from 'react';
import '../style/App.css';
import ListeVide from "./views/ListeVide";
import ListeActive from "./views/ListeActive";

class App extends Component {
  constructor(props){
    super(props);
    this.state={nomListeFromChild: ""};
  }

  myCallbackNomListe = (parm) => {
    console.log("APP->myCallbackNomListe(" + parm + ")")
    this.setState({nomListeFromChild: parm});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fever courses</h1>
        </header>
        <div className="row">
          <div className="col-sm-12 col-md-6 liste">
            <ListeVide propsChild={this.myCallbackNomListe} />
          </div>
          <div className="col-sm-12 col-md-6 liste">
            <ListeActive propsChild={this.state.nomListeFromChild} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
