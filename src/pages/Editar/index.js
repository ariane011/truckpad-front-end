import React, { useEffect, useState } from 'react';
import FormEditar from '../../components/Form/FormEditar'
import '../../assets/css/main.css'
import { useParams } from 'react-router-dom';
import api from '../../services/api'

const Editar = () => {

    const {id} = useParams('');
    const [data, setData] = useState({});

    useEffect(() => {
        api.get(`motoristas/${id}`, {
            headers: {
                Authorization: id,
            }
        }).then(response => {
        setData(response.data)
        })
    }, [id])
    console.log(data);
    
    return(
        <FormEditar data={data} />
    )
}

export default Editar;