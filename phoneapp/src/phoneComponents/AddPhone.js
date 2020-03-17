import React, {Component} from "react";
import {Container, Row, Col, Button} from "react-materialize";

export default class AddPhone extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col className="s6">
                        <h5 className="left">Produtos</h5>
                    </Col>
                </Row>
            </Container>
        );
    }

}