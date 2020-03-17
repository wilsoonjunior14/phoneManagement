import React, {Component} from "react";
import {Navbar, NavItem, Icon} from "react-materialize";


export default class HeaderApp extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Navbar
            className="blue"
            alignLinks="left"
            brand={<a href="#"><Icon className="right">smartphone</Icon>M</a>}
            menuIcon={<Icon></Icon>}
            centerLogo
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            >
            </Navbar>
        );
    }

}