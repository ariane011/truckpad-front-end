import React, {useState, useEffect} from 'react';
import { Card, Button, CardImg, CardText, CardDeck, CardBody, CardTitle
} from 'reactstrap';
import '../../assets/css/responsive.css'
import '../../assets/css/main.css'
import "./style.css";
import { Link } from "react-router-dom";
import imgAvatar from '../../assets/img/avatar05.svg'
import api from '../../services/api'

 const CardMotorista = (props) => {

    const [motoristas, setMotoristas] = useState([]);
    const id =localStorage.getItem('id');

    useEffect(() => {
        api.get('motoristas', {
            headers: {
                Authorization: id,
            }
        }).then(response => {
            const motoristas = response.data;
            let listaMotoristas = [];
            for (let i = 0; i < motoristas.length; i++){
                if (motoristas[i].status === 1 && props.status === true){
                    listaMotoristas.push(motoristas[i]);
                }
                else if (motoristas[i].status === 0 && props.status === false) {
                    listaMotoristas.push(motoristas[i]);
                }
            }
            setMotoristas(listaMotoristas)
        })
    }, [id])

    async function handleDisable(id) {
        try {
            await api.delete(`motoristas/${id}`, {
                headers: {
                    Authorization: id,
                }
            });
            setMotoristas(motoristas.filter(motorista => motorista.id !== id));
        } catch (error) {
            alert("Não foi possível inativar o motorista, tente novamente!")
        }
    }

    return (
        <>
        {motoristas.map(motorista => (
            <CardDeck key={motorista.id} className="card-deck">
                <Card className="card">
                    <CardBody className="card-body">
                        <CardImg className="card-img" top width="100%" src={imgAvatar} alt="Avatar" />
                        <CardTitle className="card-title">{motorista.nome}</CardTitle>
                        <hr/>
                        <CardText className="card-text">
                            Telefone: {motorista.telefone}
                            <br/>
                            Data de Nascimento: {motorista.dtNascimento}
                            <br/>
                            CPF: {motorista.cpf}
                            <br/>
                            CNH:  {motorista.cnh}
                            <br/> 
                        </CardText>
                        <Link to={`/editar/${motorista.id}`}>
                        <Button  className="btn-editar">Editar</Button>
                        </Link>
                        <Button type="button" onClick={() => handleDisable(motorista.id)} className="btn-inativar">
                            Inativar
                        </Button>
                    </CardBody>
                </Card>
            </CardDeck>
            ))}
        </>
    );
}

export default CardMotorista;