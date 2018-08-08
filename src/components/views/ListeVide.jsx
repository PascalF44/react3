import React, {Component} from "react";
import {Button} from 'mdbreact';

class ListeVide extends Component{
    constructor(props){
        super(props);
        this.state={ nomCourse:"", key: "" }; 
    }
    
    addListe = (e) => {
        e.preventDefault();
        var txt=this._inputListe.value;
        console.log('ListeVide->input: ' + txt);

        if (txt !== "") {
            this.setState({ 
                nomCourse: txt,
                key: Date.now()
            });

            this.props.propsChild(txt);
            this.props.propsChildActive(true);
        }

        console.log('ListeVide->state.nomCourse: ' + this.state.nomCourse);
        console.log('ListeVide->state.key: ' + this.state.key);
    }

    render(){
        return(
            <div>
                <div className="liste-header vide">
                    <span>Pas de liste en cours...</span>
                </div>
                <div className="liste-form">
                    <form onSubmit={this.addListe}>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" className="form-control form-control-sm" placeholder="kan kon yva?" ref={(a) => this._inputListe = a} />
                            </div>
                            <div className="col-md-6">
                                <Button color="primary" size="sm" type="submit">Go !</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ListeVide;