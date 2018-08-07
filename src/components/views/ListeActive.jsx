import React, {Component} from "react";
import ListeItems from "./ListeItems";

class ListeActive extends Component{
    constructor(props){
        super(props);
        this.state={ items: [] };
        this.addItem=this.addItem.bind(this);
    }

    addItem(e){
        if (this._inputItem.value !== "") {
            var newItem={
                nomItem: this._inputItem.value,
                key: Date.now()

            };
            
            this.setState((prevState) =>{ 
                return{
                    items: prevState.items.concat(newItem)
                };
            });
        }

        e.preventDefault();
    }

    render(){
        return(
            <div className="liste-active-main">
                <div className="titre-page">
                    <span>Liste en cours pour le 12/10/2018</span>
                </div>
                <div className="liste-form">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputItem = a} placeholder="keskifaut ?" />
                        <button type="submit">Ajouter...</button>
                    </form>
                </div>
                <ListeItems liste={this.state.items}/>
           </div>
        );
    }
}

export default ListeActive;