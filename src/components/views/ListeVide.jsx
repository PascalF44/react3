import React, {Component} from "react"

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
        }

        this.props.propsChild(txt);
        console.log('ListeVide->state.nomCourse: ' + this.state.nomCourse);
        console.log('ListeVide->state.key: ' + this.state.key);
    }

    render(){
        return(
            <div>
                <div className="liste-titre vide">
                    <span>Pas de liste en cours...</span>
                </div>
                <div className="liste-form">
                    <form onSubmit={this.addListe}>
                        <input ref={(a) => this._inputListe = a} placeholder="kankon yva ?" />
                        <button type="submit">Démarrer !</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ListeVide;