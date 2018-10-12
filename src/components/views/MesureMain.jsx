/**
 * 
 * Composant autonome pour la collecte de la température en provenance de la sonde
 * callback vers l'appli container pour la gestion intelligente des mesures (alerte, ...)
 *  
 */

import React, {Component} from "react";
class MesureMain extends Component{
    constructor(props) {
        super(props);
        this.state={ heure: this.nowFormatHMS(), valeur: 20.0 }
    }

    nowFormatHMS = () => {
        let now = new Date();
        let hh = now.getHours() > 9 ? now.getHours() : '0' + now.getHours();
        let mm = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes();
        let ss = now.getSeconds() > 9 ? now.getSeconds() : '0' + now.getSeconds();
        return (hh + ':' + mm + ':' + ss);
    }

    simulapi = () => {
        console.log('MesureMain->simulapi()');
        const hhmm = this.nowFormatHMS();
        const temper = (Math.random() * 20).toFixed(1);
        const newMesure =  { heure: hhmm, valeur: temper };
        console.log('simulapi->newMesure: ' + newMesure.valeur);
        this.setState(newMesure);
        console.log('simulapi->this.state: ' + this.state.valeur);
        this.props.mesure(newMesure);
    }

    diminuer = () =>{
        console.log('MesureMain->diminuer()');
        const hhmm = this.nowFormatHMS();
        const newMesure =  { heure: hhmm, valeur: this.state.valeur - 0.5 };
        this.setState(newMesure);
        this.props.mesure(newMesure);
    }

    augmenter = () =>{
        console.log('MesureMain->augmenter()');
        const hhmm = this.nowFormatHMS();
        const newMesure =  { heure: hhmm, valeur: this.state.valeur + 0.5 };
        this.setState(newMesure);
        this.props.mesure(newMesure);
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
                            <span> { this.state.heure } </span>
                        </div>
                </div>
                <div className={ classAttribDiv.join("") }>
                    <button onClick = { this.diminuer }> - </button>
                    <button onClick = { this.augmenter }> + </button>
                </div>
            </div>
        );
    }
};

export default MesureMain;
