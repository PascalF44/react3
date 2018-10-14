/**
 * 
 * Composant autonome pour la collecte de la température en provenance de la sonde
 * callback vers l'appli container pour la gestion intelligente des mesures (alerte, ...)
 *  
 */

import React, {Component} from "react";
import FDT from '../utils/FormatDateTime';
import RCP from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
class MesureMain extends Component{
    constructor(props) {
        super(props);
        this.state={ heure: '', valeur: 20.0 }
    }

    simulapi = () => {
        const hhmm = FDT.nowFormatHMS;
        const temper = (Math.random() * 20).toFixed(1);
        const newMesure =  { heure: hhmm, valeur: temper };
        this.setState(newMesure);
        console.log('simulapi->this.state: ' + this.state.valeur);
        this.props.mesure(newMesure);
    }

    diminuer = () =>{
        this.varier(-0.5);
    }

    augmenter = () =>{
        this.varier(0.5);
    }

    varier = (delta) => {
        let fdt = new FDT();
        const hhmm = fdt.nowFormatHMS();
        console.log('MesureMain->varier->hhmm: ' + hhmm)
        const newMesure =  { heure: hhmm, valeur: this.state.valeur + delta };
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

        const percentage = 66;

        return(
            <div style={{ width: '250px' }}>
                <div className={ classAttribDiv.join("") }>
                    <div className={ classAttribLib.join("") } >
                        <RCP 
                            percentage={ percentage } 
                            text={ this.state.valeur + '°C' } 
                            styles={{
                                text: {
                                  fill: '#000',
                                }
                            }}
                        />
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
