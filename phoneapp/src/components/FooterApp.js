import React, {Component} from "react";
import {Footer} from "react-materialize";

export default class FooterApp extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const style = {
            Footer:{
                position: "absolute",
                bottom: "0",
                width: "100%"
            }
        }

        return (
            <Footer
            style={style.Footer}
            className="blue"
            copyrights="2020 - Todos os direitos reservados">

            </Footer>
        );
    }


}