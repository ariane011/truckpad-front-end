import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import {firebaseStorage} from '../../../utils/firebaseUtils'

import {
    Card,
    Button,
    CardImg,
    CardTitle,
    CardText,
    CardDeck,
    CardSubtitle,
    CardBody
} from 'reactstrap';
// import './style.css'
const CardMotorista = (props) => {
    
    // const { evento } = props;
    // const [image, setImage] = useState("")

    const motorista = {
            
            nome: 'Mario', 
            tipoCNH: 'Categoria B e C'
    }
    
    
    // if(evento.img) {
    //     if(evento.img.includes("images/eventos/")) {
    //         firebaseStorage.ref().child(evento.img).getDownloadURL().then((url) => {
    //             setImage(url);
    //         })
    //         .catch((error) => (console.log(error)))
    //     }
    // }

    return (
        <>
            <CardDeck className="card-deck">
                <Card> 
                    <CardBody>
                        <CardTitle className="title">{motorista.nome}</CardTitle>
                        <CardSubtitle className="sub-titulo">{motorista.tipoCNH}</CardSubtitle>
                        {/* <Link to={`/evento/${evento.key}`}> */}
                            <Button className="btn-editar">Editar</Button>
                            <Button className="btn-inativar">Inativar</Button>
                        {/* </Link> */}
                    </CardBody>
                </Card>
            </CardDeck>
        </>
    );
};

export default CardMotorista;