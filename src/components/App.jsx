import React, { Component } from 'react';
import '../style/App.css';
import MesureMain from "./views/MesureMain";
import MesureAnnexe from "./views/MesureAnnexe";

class App extends Component {
	constructor(props){
	super(props);
	this.state={ 
		actuel: { heure: '', valeur: 20 }, 
		mini: { heure: '', valeur: 20 }, 
		maxi: { heure: '', valeur: 20 }, 
    	alerte: false };
	}

	updateMesure = (mesure) => {
		this.setState({ actuel: mesure });
		//si actuel < mini alors setState(mini: parm)
		if(mesure.valeur <= this.state.mini.valeur) this.setState({ mini: mesure });
		//si actuel > maxi alors setState(maxi: parm)
		if(mesure.valeur >= this.state.maxi.valeur) this.setState({ maxi: mesure });
		//si actuel >= seuil alors setState(alerte: true) sinon setState(alerte: false);
		this.setState({ alerte: (mesure.valeur <= 15 || mesure.valeur >= 25) });
  	}

  	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<MesureAnnexe mesure={ this.state.maxi } alerte={ this.state.maxi.valeur >= this.props.maxi } />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<MesureMain mesure={ this.updateMesure } alerte={ this.state.alerte } />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<MesureAnnexe mesure={ this.state.mini } alerte={ this.state.mini.valeur <= this.props.mini } />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
