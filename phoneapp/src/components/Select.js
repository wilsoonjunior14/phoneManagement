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
                border: "1px solid lightgray"
            }
        }

        return (
            <div>
                <label style={style.label} for="select">Select</label>
                <select style={style.select} className="browser-default" id="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
        );
    }

}