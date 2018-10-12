/**
 * 
 * Composant autonome pour la collecte de la température en provenance de la sonde
 * callback vers l'appli container pour la gestion intelligente des mesures (alerte, ...)
 * 
 */

import React, {Component} from "react";
import Moment from 'react-moment';

class MesureMain extends Component{
    constructor(props) {
        super(props);
        this.state={ heure: '', valeur: '' }
    }

    simulapi = () => {
        console.log('MesureMain->simulapi()');
        const hhmm = new Date();
        const temper = (Math.random() * 20).toFixed(1);
        const newMesure =  { heure: hhmm, valeur: temper };
        console.log('simulapi->newMesure: ' + newMesure.valeur);
        this.setState({ heure: hhmm, valeur: temper });
        console.log('simulapi->this.state: ' + this.state.valeur);
        this.props.mesure(this.state);
    }

    diminuer = () =>{
        console.log('MesureMain->diminuer()');
        const hhmm = new Date();
        this.setState((prevstate) => ({ heure: hhmm, valeur: prevstate.valeur - 1 }));
        this.props.mesure(this.state);
    }

    augmenter = () =>{
        console.log('MesureMain->augmenter()');
        const hhmm = new Date();
        this.setState((prevstate) => ({ heure: hhmm, valeur: prevstate.valeur + 1 }));
        this.props.mesure(this.state);
    }

    render() {
        let classAttribDiv=["row item-ligne "];
        let classAttribLib=["item-lib col-10 "];

        if(this.props.alerte){
            classAttribDiv.push("alerte");
            classAttribLib.push("alerte-txt");
        }

        return(
            <div>
                <div className={ classAttribDiv.join("") }>
                        <div className={ classAttribLib.join("") }>
                            <span> { this.state.valeur } °C</span>
                        </div>
                        <div className={ classAttribLib.join("") }>
                            <span> <Moment format="HH:mm:ss">{ this.state.heure }</Moment> </span>
                        </div>
                </div>
                <div className={ classAttribDiv.join("") }>
                    <button onClick = { this.simulapi }> refresh </button>
                    <button onClick = { this.diminuer }> - </button>
                    <button onClick = { this.augmenter }> + </button>
                </div>
            </div>
        );
    }
};

export default MesureMain;
