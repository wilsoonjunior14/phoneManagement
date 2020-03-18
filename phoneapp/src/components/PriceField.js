import React from "react";
import InputMask from "react-input-mask";

import createNumberMask from '../../node_modules/text-mask-addons/dist/createNumberMask';

export default class PriceField extends React.Component{

    constructor(props){
        super(props);
        this.toCurrency = this.toCurrency.bind(this);
    }

    toCurrency(number){
        const formatter = new Intl.NumberFormat("sv-SE", {
            style: "decimal",
            currency: "SEK"
          });
      
          return formatter.format(number);
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
                <InputMask onChange={this.toCurrency(this.props.value)} value={this.toCurrency(this.props.value)} style={style.input} id={this.props.id} {...this.props} className="browser-default"></InputMask>
            </div>
        );
    }

}