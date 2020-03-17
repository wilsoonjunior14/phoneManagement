import React, {Component} from "react";
import {Footer} from "react-materialize";

export default class FooterApp extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Footer
            className="blue"
            copyrights="2020 - Todos os direitos reservados">

            </Footer>
        );
    }


}