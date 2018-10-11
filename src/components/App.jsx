import React, { Component } from 'react';
import '../style/App.css';
import MesureMain from "./views/MesureMain";
//import MesureAnnexe from "./views/MesureAnnexe";

class App extends Component {
	constructor(props){
	super(props);
	this.state={ 
		actuel: { heure: '', valeur: '' }, 
		mini: { heure: '', valeur: '' }, 
		maxi: { heure: '', valeur: '' }, 
    	alerte: false };
	}

	updateMesure = (mesure) => {
		console.log("APP->updateMesure(" + mesure + ")");
		this.setState({ actuel: mesure });
		//si actuel < mini alors setState(mini: parm)
		//si actuel > maxi alors setState(maxi: parm)
		//si actuel >= seuil alors setState(alerte: true) sinon setState(alerte: false);
  	}

  	render() {
		let alerte=this.state.alerte;
		  
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<MesureMain mesure={ this.updateMesure } alerte={ alerte } />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
