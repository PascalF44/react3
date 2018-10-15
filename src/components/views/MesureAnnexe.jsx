import React, {Component} from "react";
class MesureAnnexe extends Component{
    // eslint-disable-next-line
    constructor(props){
        super(props);
    }

    /**
     * TODO : mettre à jour les CSS spécifique (affichage plus petit que le Main)
     * Composant mutualisé pour affichage du MIN (sous le Main ) et du MAX (au dessus du Main)
     */

    render(){
        let classAttribDiv=["row item-ligne "];
        let classAttribLib=["item-lib-annexe "];

        if(this.props.alerte){
            classAttribDiv.push("alerte");
            classAttribLib.push("alerte-txt");
        }

        return(
            <div style={{ width: '220px' }}>
                <div className={ classAttribDiv.join("") }>
                    <div className={ classAttribLib.join("") }>
                        <span> { this.props.titre + this.props.mesure.valeur } °C ({ this.props.mesure.heure })</span>
                    </div>
                </div>
            </div>
        );
    }
};

export default MesureAnnexe;
