import React, {useState, useEffect} from 'react';
import { Card, Button, CardImg, CardText, CardDeck, CardBody, CardTitle
} from 'reactstrap';
import '../../assets/css/main.css'
import "./style.css";
import { Link } from "react-router-dom";
import imgAvatar from '../../assets/img/avatar05.svg'
import api from '../../services/api'

 const CardMotorista = () => {

    const [motoristas, setMotoristas] = useState([]);
    const id =localStorage.getItem('id');

    useEffect(() => {
        api.get('motoristas', {
            headers: {
                Authorization: id,
            }
        }).then(response => {
        setMotoristas(response.data)
        })
    }, [id])

    async function handleDisable(id) {
        try {
            await api.delete(`motoristas/${id}`, {
                headers: {
                    Authorization: id,
                }
            });
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