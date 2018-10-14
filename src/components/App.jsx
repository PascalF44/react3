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
		if(mesure.valeur <= this.state.mini.valeur) this.setState({ mini: mesure });
		if(mesure.valeur >= this.state.maxi.valeur) this.setState({ maxi: mesure });
		this.setState({ alerte: (mesure.valeur <= this.props.mini || mesure.valeur >= this.props.maxi) });
  	}

  	render() {
		console.log('App->render->this.state.maxi.valeur: ' + this.state.maxi.valeur);

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
