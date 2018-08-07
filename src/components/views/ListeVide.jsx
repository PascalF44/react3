import React, {Component} from "react"

class ListeVide extends Component{
    constructor(props){
        super(props);
        this.state={ nomCourse:"", key: "" };
        this.addListe=this.addListe.bind(this);
    }

    addListe(e){
        if (this._inputListe.value !== "") {
            this.setState({ 
                nomCourse: this._inputListe.value,
                key: Date.now()
            });
        }

        e.preventDefault();
    }

    render(){
        return(
            <div>
                <div className="liste-titre vide">
                    <span>Pas de liste en cours...</span>
                </div>
                <div className="liste-form">
                    <form onSubmit={this.addListe}>
                        <input ref={(a) => this._inputListe = a} placeholder="pour quand ?" />
                        <button type="submit">Démarrer !</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ListeVide;