import React from 'react';
import Header from '../../components/Header';
import imgHeader from '../../assets/img/background.svg';
import SearchMotorista from '../../components/Search/SearchMotorista';
import CardMotorista from '../../components/CardMotorista'
import '../../assets/css/responsive.css'
import '../../assets/css/main.css'
import './style.css'

const Home = () => {

    const dataHeader = {
        title: `Encontre aqui os melhores motoristas`,
        urlImg: imgHeader,
    }

    return (
        <>
            <Header props={dataHeader}/>
            <SearchMotorista />
            <CardMotorista status={true}/>
        </>
    )
};

export default Home;