import React from "react";
import InputMask from "react-input-mask";
import CurrencyFormat from "react-currency-format";

export default class PriceField extends React.Component{

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
                border: "1px solid black",
                display: "block",
                padding: "5px",
                width: "100%",
                height: "35px"
            }
        }

        return(
            <div>
                <label style={style.label} for={this.props.id}>{this.props.label}</label>
                <CurrencyFormat decimalSeparator={','} thousandSeparator={'.'} prefix={''} style={style.input} id={this.props.id} {...this.props} className="browser-default"></CurrencyFormat>
            </div>
        );
    }

}