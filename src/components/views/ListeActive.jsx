import React, {Component} from "react";
import ListeItems from "./ListeItems";

class ListeActive extends Component{
    constructor(props){
        super(props);
        
        this.state={ items: [] };
    }

    addItem = (e) => {
        var txt=this.itemName.value;
        console.log("ListeActive->addItem(" + txt + ")");

        if (txt !== "") {
            var newItem={
                key: Date.now(),
                name: txt,
                done: false
            };
            
            this.setState((prevState) =>{ 
                return{
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this.itemName.value = "";
        console.log("ListeActive ITEMS: " + this.state.items);
        e.preventDefault();
    }

    deleteItem = (key) => {
        var filteredItems=this.state.items.filter(function(item){
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        })
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
                            <div className="col-9">
                                <input className="form-control" placeholder="keskifô ?" ref={(a) => this.itemName = a} />
                            </div>
                            <div className="col-2">
                                <button className="btn btn-primary" type="submit"><i className="fas fa-cart-plus" /></button>
                            </div>
                        </div>
                    </form>
                </div>
                <ListeItems liste={this.state.items} delete={this.deleteItem} />
           </div>
        );
    }
}

export default ListeActive;