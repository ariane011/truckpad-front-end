import React from "react";
import './style.css'
import FormInput from "./FormInput";
import { Button} from 'reactstrap';

  const FormCadastro = () => {
    
    return (
      <>
        <h2 className="title-form">Cadastre um novo motorista</h2>
          <FormInput />
        <Button className="btn-form-cadastrar">Cadastrar</Button>
      </>
      );
};
    
export default FormCadastro;