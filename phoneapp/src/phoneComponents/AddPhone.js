import React, {Component} from "react";
import {Container, Row, Col, Button, TextInput} from "react-materialize";
import {toast} from "react-toastify";
import Input from "../components/Input";
import Select from "../components/Select";
import DateField from "../components/DateField";
import PriceField from "../components/PriceField";
import axios from "axios";
import {Redirect} from "react-router-dom";

export default class AddPhone extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            redirect: false,
            colors: ['BLACK', 'WHITE', 'GOLD', 'PINK'],
            product: {},
            defaultOptions:{
                headers: {
                    cpf: "03819277331"
                },
            },
            _id: this.props.match != undefined ? this.props.match.params.id : undefined
        };

        if (this.state._id != undefined) this.getProduct();

        this.updateValues    = this.updateValues.bind(this);
        this.submitProduct   = this.submitProduct.bind(this);
        this.validateProduct = this.validateProduct.bind(this);
        this.getProduct      = this.getProduct.bind(this);
        this.updateProduct   = this.updateProduct.bind(this);
        this.formatDate      = this.formatDate.bind(this);
    }

    updateValues(evt){
        let oldState = this.state;
        oldState.product[evt.target.name] = evt.target.value;
        this.setState(oldState);
    }

    submitProduct(){

        let validation = this.validateProduct();
        if (validation.status){

            let oldState = this.state;
            oldState.product.code  = "#"+parseInt(10000+(Math.random()*1000));
            oldState.product.price = oldState.product.price.replace(".", "").replace(",",".");
            this.setState(oldState);

            if (this.state._id == undefined){
                this.saveProduct();
            }else{
                this.updateProduct();
            }

        }else{
            toast.error(validation.message);
        }
    }

    formatDate(date){
        let data = date.substring(0, 10);
        data     = data.split("-");
        return data[2]+"/"+data[1]+"/"+data[0];
    }

    getProduct(){
        axios.get("https://phones--melhorcom.repl.co/phone/"+this.state._id, this.state.defaultOptions)
        .then(res => {
            let oldState             = this.state;
            oldState.product         = res.data;
            oldState.product.date    = this.formatDate(oldState.product.date);
            oldState.product.endDate = this.formatDate(oldState.product.endDate); 

            this.setState(oldState);
            console.log(this.state);
        });
    }

    saveProduct(){

        axios.post("https://phones--melhorcom.repl.co/phone", this.state.product, this.state.defaultOptions)
        .then(res => {
            let oldState     = this.state;
            oldState.product = {};
            oldState.redirect= true;
            this.setState({oldState});

            let data = res.data;
            toast.info(data.business);
        });
    }

    updateProduct(){
        axios.patch("https://phones--melhorcom.repl.co/phone/"+this.state._id, this.state.product, this.state.defaultOptions)
        .then(res => {
            toast.info(res.data);
            this.getProduct();
        });
    }

    validateProduct(){

        if (this.state.product.model == undefined){
            return {message: "Modelo não informado!", status: false};
        }

        if ((this.state.product.model.trim()).length < 2 || (this.state.product.model.trim()).length > 255){
            return {message: "Descrição do Modelo deve conter entre 2 e 255 caracteres!", status: false};
        }

        if (this.state.product.brand == undefined){
            return {message: "Marca não informada!", status: false};
        }

        if ((this.state.product.brand.trim()).length < 2 || (this.state.product.brand.trim()).length > 255){
            return {message: "Descrição da Marca deve conter entre 2 e 255 caracteres!", status: false};
        }

        if (this.state.product.color == undefined || this.state.product.color == ""){
            return {message: "Cor não informada!", status: false};
        }

        if (this.state.product.price == undefined){
            return {message: "Preço não informado!", status: false};
        }

        if (this.state.product.price <= 0){
            return {message: "Preço com valor nulo! ", status: false};
        }

        if (this.state.product.date == undefined || this.state.product.date.length < 10){
            return {message: "Data de início das vendas não informado ou inválida!", status: false};
        }

        let dateSplit = this.state.product.date.split("/");
        let day       = parseInt(dateSplit[0]);
        let month     = parseInt(dateSplit[1]);
        let year      = parseInt(dateSplit[2]);

        let dateTimestamp = (new Date(""+year+"-"+month+"-"+day+"")).getTime();
        let cutTimestamp  = (new Date("2018-12-25")).getTime();
        
        if (day <= 0 || day > 31){
            return {message: "Dia da data de início das vendas está inválido!", status: false};
        }

        if (month <= 0 || month > 12){
            return {message: "Mês da data de início das vendas está inválido!", status: false};
        }

        if (dateTimestamp <= cutTimestamp){
            return {message: "Data de início das vendas deve ser superior a data de 25/12/2018", status: false};
        }
        

        if (this.state.product.endDate == undefined){
            return {message: "Data de fim das vendas não informado!", status: false};
        }

        let endDateSplit = this.state.product.endDate.split("/");
        day       = parseInt(endDateSplit[0]);
        month     = parseInt(endDateSplit[1]);
        year      = parseInt(endDateSplit[2]);
        let endDateTimestamp = (new Date(""+year+"-"+month+"-"+day+"")).getTime();
        
        if (day <= 0 || day > 31){
            return {message: "Dia da data de fim das vendas está inválido!", status: false};
        }

        if (month <= 0 || month > 12){
            return {message: "Mês da data de fim das vendas está inválido!", status: false};
        }

        if (endDateTimestamp <= dateTimestamp){
            return {message: "Data de início das vendas não pode ser superior a data fim das vendas!", status: false};
        }

        return {message: "", status: true};

    }

    render(){

        if (this.state.redirect){
            return (<Redirect to="/"></Redirect>);
        }

        const style = {
            container:{
                width: "40%"
            },
            button:{
                width: "100%"
            }
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
                                <Select name="color" label="Cor" options={this.state.colors} value={this.state.product.color} onChange={this.updateValues}></Select>
                            </Col>
                            <Col s="12" l="6">
                                <PriceField id="preco" name="price" label="Preço" value={this.state.product.price} onChange={this.updateValues}></PriceField>
                            </Col>
                            <Col s="12" l="6">
                                <DateField id="inicio" name="date" label="Inicio das Vendas" type="text" value={this.state.product.date} onChange={this.updateValues}></DateField>
                            </Col>
                            <Col s="12" l="6">
                                <DateField id="fim" name="endDate" label="Fim das Vendas" type="text" value={this.state.product.endDate} onChange={this.updateValues}></DateField>
                            </Col>
                        </Row>
                        <Row>
                            <Col s="12" l="6">
                                
                            </Col>
                            <Col s="12" l="3">
                                <a style={style.button} className="btn waves-effect waves-light grey lighten-2 black-text right" href="/">Voltar</a>
                            </Col>
                            <Col s="12" l="3">
                                <Button style={style.button} onClick={this.submitProduct} className="btn grey lighten-2 black-text right">Salvar</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }

}