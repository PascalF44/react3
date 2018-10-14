import React, {Component} from "react";
class MesureAnnexe extends Component{
    // eslint-disable-next-line
    constructor(props){
        super(props);
    }

    /**
     * TODO : afficher la température et l'heure reçues en props
     * aucun comportement/état pour ce composant
     * CSS spécifique (affichage plus petit que le Main)
     * Composant mutualisé pour affichage du MIN (sous le Main ) et du MAX (au dessus du Main)
     */

    render(){
        let classAttribDiv=["row item-ligne "];
        let classAttribLib=["item-lib-annexe col-10 "];

        if(this.props.alerte){
            classAttribDiv.push("alerte");
            classAttribLib.push("alerte-txt");
        }

        return(
            <div>
                <div className={ classAttribDiv.join("") }>
                    <div className={ classAttribLib.join("") }>
                        <span> { this.props.mesure.valeur } °C </span>
                    </div>
                    <div className={ classAttribLib.join("") }>
                        <span> { this.props.mesure.heure } </span>
                    </div>
                </div>
            </div>
        );
    }
};

export default MesureAnnexe;
