import React, {Component} from "react";

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
            <div className="row item-ligne">
                <div className="item-check col-1">
                    <input type="checkbox" onChange={this.handleChange(item.key)} />
                </div>
                <div className="item-lib col-10">
                    {item.nomItem}
                </div>
                <div className="item-del col-1">
                    <i className="far fa-trash-alt" onClick={()=>this.delete(item.key)} />
                </div>
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