import React, {Component} from "react";
import {Container, Row, Col, Button, TextInput} from "react-materialize";

import Input from "../components/Input";
import Select from "../components/Select";

export default class AddPhone extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const style = {

            container:{
                width: "40%"
            },

            label: {
                color: "black"
            },

            input: {
                borderRadius: "6px",
                border: "1px solid lightgray",
                display: "block",
                padding: "5px"
            }
        }

        return(
            <Container style={style.container}>
                <Row>
                    <Col s="12">
                        <h5 className="center-align">Detalhes do Produto</h5>
                        <Row>
                            <Col s="12" l="6">
                                <Input id="modelo" label="Modelo" type="text"></Input>
                            </Col>
                            <Col s="12" l="6">
                                <Input id="marca" label="Marca" type="text"></Input>
                            </Col>
                            <Col s="12" l="6">
                                <Select></Select>
                            </Col>
                            <Col s="12" l="6">
                                <Input id="preco" label="Preço" type="text"></Input>
                            </Col>
                            <Col s="12" l="6">
                                <Input id="inicio" label="Inicio das Vendas" type="text"></Input>
                            </Col>
                            <Col s="12" l="6">
                                <Input id="fim" label="Fim das Vendas" type="text"></Input>
                            </Col>
                        </Row>
                        <Row>
                            <Col s="12" l="6">
                                
                            </Col>
                            <Col s="12" l="3">
                                <a className="btn waves-effect waves-light grey lighten-2 black-text right" href="/">Voltar</a>
                            </Col>
                            <Col s="12" l="3">
                                <Button className="btn grey lighten-2 black-text right">Salvar</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }

}