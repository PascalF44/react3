import React, {Component} from "react";

class MesureAnnexe extends Component{
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
        let hhmm=this.props.mesure.heure;
        let temper=this.props.mesure.valeur;

        return(
            <div>
                <div>
                        <span> { temper } </span>
                        <span> { hhmm } </span>
                </div>
            </div>
        );
    }
};

export default MesureAnnexe;
