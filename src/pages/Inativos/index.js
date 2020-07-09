import React from 'react';
import '../../assets/css/main.css'
import './style.css'
import CardMotorista from '../../components/CardMotorista'
import imgHeader from '../../assets/img/dorpdown.svg'

const Inativos = () => {

    return(
        <div>
          <img className="img-header" src={imgHeader} alt="Ilustração dropdown menu" />
          <section  className="cards-inativos">
            <CardMotorista status={false}/>
          </section>
        </div>
    )
}

export default Inativos