import React, {Component} from "react";
import {Button} from 'mdbreact';
import ListeItems from "./ListeItems";

class ListeActive extends Component{
    constructor(props){
        super(props);
        
        this.state={ items: [] };
    }

    addItem = (e) => {
        var txt=this._inputItem.value;
        console.log("ListeActive->addItem(" + txt + ")");

        if (this._inputItem.value !== "") {
            var newItem={
                nomItem: txt,
                key: Date.now()

            };
            
            this.setState((prevState) =>{ 
                return{
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputItem.value = "";
        console.log("ListeActive ITEMS: " + this.state.items);
        e.preventDefault();
    }

    deleteItem = (key) => {
        this.props.deleteItem(key);
    }

    render(){
        return(
            <div>
                <div className="liste-header active">
                    <span>Liste en cours pour {this.props.propsChild}</span>
                </div>
                <div className="liste-form">
                    <form onSubmit={this.addItem}>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" className="form-control form-control-sm" placeholder="keskifô ?" ref={(a) => this._inputItem = a} />
                            </div>
                            <div className="col-md-6">
                                <Button color="primary" size="sm" type="submit">Ajouter...</Button>
                            </div>
                        </div>
                    </form>
                </div>
                <ListeItems liste={this.state.items}/>
           </div>
        );
    }
}

export default ListeActive;