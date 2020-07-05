import React from "react";
import './style.css'
import FormInput from "./FormInput";
import { Button} from 'reactstrap';

  const FormEditar = () => {
    
    return (
      <>
        <h2 className="title-form">Cadastre um novo motorista</h2>
          <FormInput />
        <Button className="btn-form-salvar">Salvar</Button>
      </>
      );
};
    
export default FormEditar;