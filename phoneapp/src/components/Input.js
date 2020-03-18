import React, {Component} from "react";

export default class Input extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const style = {

            label: {
                color: "black",
                fontWeight: "bold"
            },

            input: {
                borderRadius: "6px",
                border: "1px solid lightgray",
                display: "block",
                padding: "5px",
                width: "100%",
                height: "35px"
            }
        }


        return (
        <div>
            <label style={style.label} for={this.props.id}>{this.props.label}</label>
            <input style={style.input} id={this.props.id} type={this.props.type} className="browser-default" />
        </div>);
    }


}