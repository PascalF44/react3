import React, {Component} from "react";

class ListeItems extends Component{
    constructor(props){
        super(props);
        this.state={bidon: ""};
    }

    creerListe = (item) => {
        return <li key={item.key} onClick={()=>this.delete(item.key)}>{item.nomItem}</li>
    }

    delete = (key) => {
        this.props.delete(key);
    }
 
    render(){
        var listeParam=this.props.liste;
        var ListeItems=listeParam.map(this.creerListe);

        return(<ul className="liste-items">{ListeItems}</ul>);
    }
};

export default ListeItems;