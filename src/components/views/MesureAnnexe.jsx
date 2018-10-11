import React, {Component} from "react";

class MesureAnnexe extends Component{
    constructor(props){
        super(props);
    }

    render(){
        // let hhmm=this.props.mesure.heure;
        // let temper=this.props.mesure.valeur;
        let hhmm = '';
        let temper = '';

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
