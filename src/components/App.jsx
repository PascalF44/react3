import React, { Component } from 'react';
import '../style/App.css';
import MesureMain from "./views/MesureMain";
import MesureAnnexe from "./views/MesureAnnexe";

class App extends Component {
	constructor(props){
	super(props);
	this.state={ 
		actuel: { heure: '--:--:--', valeur: '--' }, 
		mini: { heure: '--:--:--', valeur: '--' }, 
		maxi: { heure: '--:--:--', valeur: '--' }, 
		freq: 1 * 60 * 1000,
    	alerte: false };
	}

	/**
	 * TODO : passer frequence dans les props
	 * augmenter la fréquence de mesure si :
	 * 	 - variation importante de température 
	 * 	 - si tendance indique atteinte limite (haute ou basse) dans pas longtemps
	 */
	
	updateMesure = (mesure) => {
		console.log(mesure.heure + ' -> ' + mesure.valeur);
		this.setState({ actuel: mesure });
		if(mesure.valeur <= this.state.mini.valeur || this.state.mini.valeur === '--') this.setState({ mini: mesure });
		if(mesure.valeur >= this.state.maxi.valeur || this.state.maxi.valeur === '--') this.setState({ maxi: mesure });
		this.setState({ alerte: (mesure.valeur <= this.props.mini || mesure.valeur >= this.props.maxi) });
  	}

  	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<MesureAnnexe mesure={ this.state.maxi } alerte={ this.state.maxi.valeur !== '--' && this.state.maxi.valeur >= this.props.maxi } titre="Maxi " />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 col-md-3">
						<MesureMain mesure={ this.updateMesure } alerte={ this.state.alerte } frequence={ this.state.freq } />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<MesureAnnexe mesure={ this.state.mini } alerte={ this.state.mini.valeur !== '--' && this.state.mini.valeur <= this.props.mini } titre="Mini " />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
