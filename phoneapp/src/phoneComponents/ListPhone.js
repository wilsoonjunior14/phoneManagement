import React, {Component} from "react";

import {Container, Row, Col, Table, Button, Icon} from "react-materialize";

export default class ListPhone extends React.Component{

    constructor(props){
        super(props);
    }

    getProdutos(){

    }

    render(){

        const style = {
            buttonTable: {
                marginTop: "15px"
            },
            buttonOptions:{
                marginRight: "20px"
            },
            table:{
                textAlign: "center"
            },
            borderTable:{
                border: "1px solid black",
                textAlign: "center"
            }
        }

        return (
            <Container>
                <Row>
                    <Col className="s6">
                        <h5 className="left">Produtos</h5>
                    </Col>

                    <Col className="s6">
                        <a href="/add" waves="light" style={style.buttonTable} className="btn grey lighten-2 black-text right">
                            <Icon left>add</Icon>
                            <Icon left>smartphone</Icon>
                            Adicionar
                        </a>
                    </Col>

                    <Col className="s12">
                        <Table>
                            <thead>
                                <tr style={style.borderTable}>
                                    <th>Codigo</th>
                                    <th>Modelo</th>
                                    <th>Preço</th>
                                    <th>Marca</th>
                                    <th>Cor</th>
                                    <th colspan="2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={style.borderTable}>
                                    <td>12093</td>
                                    <td>12093</td>
                                    <td>12093</td>
                                    <td>12093</td>
                                    <td>12093</td>
                                    <td>
                                        <Icon>edit</Icon>
                                    </td>
                                    <td>
                                        <Icon>delete</Icon>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }


}