import React, {Component} from "react";
import Item from './Item'

class ListeItems extends Component{
    creerListe = (item) => {
        return(
            <div key={item.key}>
                <Item item={item} delete={this.delete}/>
            </div>
        );
    }

    delete = (key) => {
        this.props.delete(key);
    }

    render(){
        var listeParam=this.props.liste;
        var ListeItems=listeParam.map(this.creerListe);

        return(
            <div className="liste-items">
                {ListeItems}
            </div>
        );
    }
};

export default ListeItems;