import React, {Component} from "react"

class ListeVide extends Component{
    render(){
        return(
            <div>
                <div className="liste-titre vide">
                    <span>Pas de liste en cours...</span>
                </div>
                <div className="liste-vide-form">
                    <form>
                        <input placeholder="pour quand ?" />
                        <button type="submit">Démarrer !</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ListeVide;