import React, {Component} from "react";

export default class Select extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const style = {
            label: {
                fontWeight: "bold",
                color: "black"
            },
            select: {
                height: "35px",
                border: "1px solid black",
                borderRadius: "6px"
            }
        }

        return (
            <div>
                <label style={style.label} for="select">{this.props.label}</label>
                <select style={style.select} className="browser-default" id="select" {...this.props}>
                    <option disabled selected>Selecione uma opção</option>
                    {this.props.options.map(item => 
                        <option value={item}>{item}</option>)}
                </select>
            </div>
        );
    }

}