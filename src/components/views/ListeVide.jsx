import React, {Component} from "react"

class ListeVide extends Component{
    constructor(props, context){
        super(props, context);
        this.state={
            dateCourse: ""
        };

        this.dateCourse=this.dateCourse.bind(this);
    }

    dateCourse(e){
        this.setState({
            dateCourse: e.target.value
        });
    }

    addListe(e){
        this.setState({ 
            dateCourse: this.state.dateCourse
        });

        e.preventDefault();
    }

    render(){
        return(
            <div>
                <div className="liste-titre vide">
                    <span>Pas de liste en cours...</span>
                </div>
                <div className="liste-vide-form">
                    <form onSubmit={this.addListe}>
                        <input onChange={this.dateCourse} placeholder="pour quand ?" />
                        <button type="submit">Démarrer !</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ListeVide;