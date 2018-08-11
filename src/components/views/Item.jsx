import React, {Component} from "react";

class Item extends Component{
    constructor(props){
        super(props);
        this.state={done: false}
    }

    toggleCb = name => event => {
        this.setState((prevState) =>{ 
            return{
                done: !prevState.done
            };
        });
    }

    delete = (key) => {
        this.props.delete(key);
    }

    render(){
        var art=this.props.item;
        var classAttribDiv=["row item-ligne "];
        var classAttribLib=["item-lib col-10 "];

        if(this.state.done){
            classAttribDiv.push("done");
            classAttribLib.push("raye");
        }

        return(
            <div>
                <div className={classAttribDiv.join("")}>
                    <div className="item-check col-1">
                        <input ref={input=>{this.myCb=input;}} type="checkbox" onChange={this.toggleCb(art.key)} />
                    </div>
                    <div className={classAttribLib.join("")}>
                        <span ref={key=>{this.myLib=key;}}> {art.name} </span>
                    </div>
                    <div className="item-del col-1">
                        <i className="far fa-trash-alt" onClick={()=>this.delete(art.key)} />
                    </div>
                </div>
            </div>
        );
    }
};

export default Item;
