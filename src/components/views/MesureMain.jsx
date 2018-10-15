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
        this.state={
            mes: { heure: '--:--:--', valeur: '--' },
            avancement: 0
        }
    }

    componentDidMount(){
        this.timerProgID = setInterval(() => this.updateAvancement(), 1000);
        this.timerID = setInterval(() => this.simulapi(), this.props.frequence);
    }

    componentWillUnmount(){
        clearInterval(this.timerProgID);
        clearInterval(this.timerID);
    }

    simulapi = () => {
        let fdt = new FDT();
        const hhmm = fdt.nowFormatHMS();
        fetch('https://cloud.boltiot.com/remote/e08179db-97d0-49fb-82cc-d7f4f42222f1/analogRead?pin=A0&deviceName=BOLT5034218')
        .then(res => res.json())
        .then((data) => {
            let temper = data.value/10;
                this.setState({ mes: {heure: hhmm, valeur: temper } });
                this.props.mesure({ heure: hhmm, valeur: temper });
            },
            (error) => { console.log("ERR: " + error) }
        );
    }

    updateAvancement = () => {
        this.setState((oldstate, props) => ({ 
            avancement: oldstate.avancement >= props.frequence ? 1000 : oldstate.avancement + 1000
        }));
    }

    automatiser = () =>{
        
    }

    diminuer = () =>{
        this.varier(-0.5);
    }

    augmenter = () =>{
        this.varier(0.5);
    }

    varier = (delta) => {
        console.log('AVANT -> this.state.mes.valeur: ' + this.state.mes.valeur);
        let fdt = new FDT();
        const hhmm = fdt.nowFormatHMS();
        const newval = (this.state.mes.valeur === '--' ? delta : this.state.mes.valeur + delta)
        const newMesure =  { heure: hhmm, valeur: newval };
        console.log('AVANT -> newMesure.valeur: ' + newMesure.valeur);
        this.setState({ mes: newMesure });
        console.log('Callback  ' + this.state.mes.valeur);
        this.props.mesure(newMesure);
    }

 	/**
	 * TODO : mettre à jour les CSS
	 */
    render() {
        let classAttribDiv=["row item-ligne "];
        let classAttribLib=["item-lib "];

        if(this.props.alerte){
            classAttribDiv.push("alerte");
            classAttribLib.push("alerte-txt");
        }

        const pourcentProg = this.state.avancement / this.props.frequence * 100;

        return(
            <div style={{ width: '220px' }}>
                <div className={ classAttribDiv.join("") }>
                    <div className={ classAttribLib.join("") } >
                        <RCP 
                            percentage={ pourcentProg } 
                            text={ this.state.mes.valeur + ' °C' } 
                            styles={{
                                text: {
                                  fill: '#000',
                                }
                            }}
                        />
                        <span> { this.state.mes.heure } </span>
                    </div>
                </div>
                {/* <div className={ classAttribDiv.join("") }>
                    <button onClick = { this.diminuer }> - </button>
                    <button onClick = { this.augmenter }> + </button>
                    <button onClick = { this.automatiser }> auto </button>
                </div> */}
            </div>
        );
    }
};

export default MesureMain;
