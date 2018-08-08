import React, { Component } from 'react';
import '../style/App.css';
import ListeVide from "./views/ListeVide";
import ListeActive from "./views/ListeActive";

class App extends Component {
  constructor(props){
    super(props);
    this.state={nomListeFromChild: "", listeActive: false};
  }

  myCallbackNomListe = (parm) => {
    console.log("APP->myCallbackNomListe(" + parm + ")");
    this.setState({nomListeFromChild: parm});
  }

  myCallBackListeAffiche = (parm) => {
    console.log("App->myCallBackListeAffiche(" + parm + ")");
    this.setState({listeActive: parm});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fever courses</h1>
        </header>
        <div className="row">
          <div className="col-sm-12 col-md-6 liste">
        	{!this.state.listeActive &&
              <ListeVide propsChild={this.myCallbackNomListe} propsChildActive={this.myCallBackListeAffiche} />
			}
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
