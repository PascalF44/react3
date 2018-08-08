import React, {Component} from "react";

class ListeItems extends Component{
    creerListe(item){
        return <li key={item.key} onClick={()=>this.deleteItem(item.key)}>{item.nomItem}</li>
    }
 
    render(){
        var listeParam=this.props.liste;
        var ListeItems=listeParam.map(this.creerListe);

        return(<ul className="liste-items">{ListeItems}</ul>);
    }
};

export default ListeItems;