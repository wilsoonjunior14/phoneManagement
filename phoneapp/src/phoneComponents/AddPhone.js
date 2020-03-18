import React, {Component} from "react";
import {Container, Row, Col, Button, TextInput} from "react-materialize";

import Input from "../components/Input";
import Select from "../components/Select";

export default class AddPhone extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            colors: ['BLACK', 'WHITE', 'GOLD', 'PINK'],
            product: {}
        };

        this.updateValues  = this.updateValues.bind(this);
        this.submitProduct = this.submitProduct.bind(this);
    }

    updateValues(evt){
        let oldState = this.state;
        oldState.product[evt.target.name] = evt.target.value;
        this.setState(oldState);
    }

    submitProduct(){
        console.log(this.state);
    }

    render(){

        const style = {

            container:{
                width: "40%"
            },
        }

        return(
            <Container style={style.container}>
                <Row>
                    <Col s="12">
                        <h5 className="center-align">Detalhes do Produto</h5>
                        <Row>
                            <Col s="12" l="6">
                                <Input id="modelo" name="model" label="Modelo" type="text" value={this.state.product.model} onChange={this.updateValues} ></Input>
                            </Col>
                            <Col s="12" l="6">
                                <Input id="marca" name="brand" label="Marca" type="text" value={this.state.product.brand} onChange={this.updateValues}></Input>
                            </Col>
                            <Col s="12" l="6">
                                <Select name="color" options={this.state.colors} value={this.state.product.color} onChange={this.updateValues}></Select>
                            </Col>
                            <Col s="12" l="6">
                                <Input id="preco" name="price" label="Preço" type="text" value={this.state.product.price} onChange={this.updateValues}></Input>
                            </Col>
                            <Col s="12" l="6">
                                <Input id="inicio" name="date" label="Inicio das Vendas" type="text" value={this.state.product.date} onChange={this.updateValues}></Input>
                            </Col>
                            <Col s="12" l="6">
                                <Input id="fim" name="endDate" label="Fim das Vendas" type="text" value={this.state.product.endDate} onChange={this.updateValues}></Input>
                            </Col>
                        </Row>
                        <Row>
                            <Col s="12" l="6">
                                
                            </Col>
                            <Col s="12" l="3">
                                <a className="btn waves-effect waves-light grey lighten-2 black-text right" href="/">Voltar</a>
                            </Col>
                            <Col s="12" l="3">
                                <Button onClick={this.submitProduct} className="btn grey lighten-2 black-text right">Salvar</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }

}