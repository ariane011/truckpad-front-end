import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import imgHeader from '../../assets/img/background.svg';
import SearchMotorista from '../../components/Search/SearchMotorista';
import CardMotorista from '../../components/CardMotorista'
import '../../assets/css/main.css'
import './style.css'

const Home = () => {
    const white = "melhores" 
    const dataHeader = {
        title: `Encontre aqui os ${white} motoristas`,
        urlImg: imgHeader,
    }
    const [motoristaList, setMotoristaList] = useState([]);
    useEffect(() => {
    })

    return (
        <>
            <Header props={dataHeader}/>
            {motoristaList && <SearchMotorista motoristaList={motoristaList}/>}
            <CardMotorista/>
        </>
    )
};

export default Home;