import React, {Component} from "react";
import Moment from 'react-moment';

class MesureMain extends Component{
    constructor(props) {
        super(props);
        this.state={ heure: '', valeur: '' }
    }

    /**
     * fonction: timeOut appel API pour récupérer mesure
     * mise à jour mesure avec callback pour déclenchement alerte si besoin
     * this.props.mesure = mesure
     */

    simulapi = () => {
        const hhmm = new Date();
        const temper = Math.random() * 20;
        const newMesure =  { heure: hhmm, valeur: temper };

        this.setState(() => { 
            return newMesure;
        });

        this.props.mesure(newMesure);
    }

    render() {
        let hhmm = this.state.heure;
        let temper = this.state.valeur;

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
                        <span> { temper } </span>
                        <span> <Moment format="HH:mm">{ hhmm }</Moment> </span>
                    </div>
                </div>
                <div>
                    <button onClick = { this.simulapi }> refresh </button>
                </div>
            </div>
        );
    }
};

export default MesureMain;
