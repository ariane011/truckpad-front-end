import React from 'react';
import {
    Card,
    Button,
    CardImg,
    CardText,
    CardDeck,
    CardBody,
    CardTitle
} from 'reactstrap';
import '../../assets/css/main.css'
import "./style.css";
import { Link } from "react-router-dom";
import imgAvatar from '../../assets/img/avatar05.svg'

 const CardMotorista = () => {

    const motorista = {
       
        nome: 'Alberto José',
        telefone: '(11) 9999-9999',
        dataNascimento: '01/01/1970',
        cpf: '821.374.530-29',
        cnh:  '940.777.543-27',
        categoria: 'B e C'
    }

    return (
        <CardDeck className="card-deck">
            <Card className="card">
                <CardBody>
                    <CardImg className="card-img" src={imgAvatar} alt="Avatar" />
                    <CardTitle className="card-title">{motorista.nome}</CardTitle>
                    <hr/>
                    <CardText className="card-text">
                        Telefone: {motorista.telefone}
                        <br/>
                        Data de Nascimento: {motorista.dataNascimento}
                        <br/>
                        CPF: {motorista.cpf}
                        <br/>
                        CNH:  {motorista.cnh}
                        <br/> 
                    </CardText>
                    <Button className="btn-editar" to="/editar" tag={Link}>Editar</Button>
                    <Button className="btn-inativar">Inativar</Button>
                </CardBody>
            </Card>
        </CardDeck>
    );
}

export default CardMotorista;