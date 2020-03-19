import React, {Component} from "react";

import {Container, Row, Col, Table, Button, Icon} from "react-materialize";
import {toast} from "react-toastify";
import axios from "axios";
import CurrencyFormat from "react-currency-format";

export default class ListPhone extends React.Component{

    constructor(props){
        super(props);
        this.state = {products: [],
            defaultOptions: {
                headers:{
                    cpf: "03819277331"
                }
            }};

        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount(){
        this.getProdutos();
    }

    getProdutos(){

        axios.get("https://phones--melhorcom.repl.co/phone",this.state.defaultOptions)
        .then((response) => {
            let oldState = this.state;
            oldState.products = response.data;
            this.setState(oldState);
        });
    }

    deleteProduct(product){

        axios.delete("https://phones--melhorcom.repl.co/phone/"+product._id, this.state.defaultOptions)
        .then((response) => {
            let message = response.data;
            toast.info(message);

            this.getProdutos();
        });
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
                                    <th colSpan="2"></th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.products.map(product => 
                                    <tr style={style.borderTable}>
                                        <td>{product.code[0]}</td>
                                        <td>{product.model}</td>
                                        <td>
                                            <CurrencyFormat decimalSeparator={','} thousandSeparator={'.'} prefix={'R$'} displayType={'text'} value={product.price}></CurrencyFormat>    
                                        </td>
                                        <td>{product.brand}</td>
                                        <td>{product.color}</td>
                                        <td>
                                            <a href={"/edit/"+product._id}>
                                                <Icon left className="black-text">edit</Icon>
                                            </a>
                                        </td>
                                        <td>
                                            <a onClick={() => this.deleteProduct(product)}>
                                                <Icon left className="black-text">delete</Icon>
                                            </a>
                                        </td>
                                </tr>
                                )}

                                
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }


}