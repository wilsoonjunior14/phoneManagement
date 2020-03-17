import React, {Component} from "react";
import {Navbar, NavItem, Icon} from "react-materialize";

import {BrowserRouter as Router,
    Switch, Route, Link} from "react-router-dom";

import ListPhone from "../phoneComponents/ListPhone";
import AddPhone from "../phoneComponents/AddPhone";


export default class HeaderApp extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Router>

                <div>
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
                        <NavItem href="/">List</NavItem>
                    </Navbar>

                    <Switch>
                        <Route exact path="/">
                            <ListPhone />
                        </Route>
                        <Route path="/add">
                            <AddPhone />
                        </Route>
                    </Switch>

                </div>

            </Router>
        );
    }

}