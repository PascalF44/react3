import React, {Component} from "react";
import {Checkbox} from '@material-ui/core';

class ListeItems extends Component{
    constructor(props){
        super(props);
        this.state = { checkedA: false };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    }
    
    creerListe = (item) => {
        return( 
            <li key={item.key}>
                <Checkbox value="checkedA" onChange={this.handleChange('checkedA')} />
                {item.nomItem}
                <button className="btn btn-danger" onClick={()=>this.delete(item.key)}>
                    <i className="fas fa-trash" />
                </button>
            </li>
        );
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