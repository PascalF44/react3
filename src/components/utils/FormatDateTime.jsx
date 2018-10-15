import {Component} from "react";

class FormatDateTime extends Component{
    // eslint-disable-next-line
    constructor(props){
		super(props);
	}

	nowFormatHMS = () => {
        let now = new Date();
        let hh = now.getHours() > 9 ? now.getHours() : '0' + now.getHours();
        let mm = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes();
        let ss = now.getSeconds() > 9 ? now.getSeconds() : '0' + now.getSeconds();
        return (hh + ':' + mm + ':' + ss);
    }
}

export default FormatDateTime;