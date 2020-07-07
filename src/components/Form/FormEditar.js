import React, {useState, useEffect} from 'react';
import {Form, FormGroup, Label, Input, Container, CustomInput, Button } from 'reactstrap';
import { Link, useParams } from "react-router-dom";
import { useHistory} from 'react-router-dom';
import '../../assets/css/main.css'
import './style.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import api from '../../services/api'


const FormEditar = (props) => {
  const {id} = useParams('');
  const obj = {id: '', nome: '', telefone: '', dtNascimento: '', cpf: '', cnpj: '', categoria: '' };
  const {nome, telefone, dtNascimento, cpf, cnh, categoria} = props.data;
  const initialValues = props.data.id === undefined ? obj : {id, nome, telefone, dtNascimento, cpf, cnh, categoria};
  const enableReinitialize = true;

    const history = useHistory();
    const formik = useFormik({
      initialValues,
      enableReinitialize
    });

    const DisplayErrors = (props) => {
      const { msgError } = props
      return(
          <>
          {msgError && <span className="validate-error">{msgError}</span>}
          </>    
      )
    }

    const [sendNome, setNome] = useState('');
    const [sendTelefone, setTelefone] = useState('');
    const [sendDtNascimento, setDtNascimento] = useState('');
    const [sendCpf, setCpf] = useState('');
    const [sendCnh, setCnh] = useState('');
    const [sendCategoria, setCategoria] = useState([]);
    const [motorista, setMotorista] = useState('');

    const handleChange = (event) => {
      setNome({ ...sendNome, [event.target.name]: event.target.value })
      setTelefone({ ...sendTelefone, [event.target.name]: event.target.value })
      setDtNascimento({ ...sendDtNascimento, [event.target.name]: event.target.value })
      setCpf({ ...sendCpf, [event.target.name]: event.target.value })
      setCnh({ ...sendCnh, [event.target.name]: event.target.value })
      setCategoria({ ...sendCategoria, [event.target.name]: event.target.value })
    }

    function onSubmit(e) {
      e.preventDefault()
      let errors = formik.errors;
      let values = formik.values;

      if (Object.keys(errors).length > 0 || values.email === "" ) {
        alert("Os dados devem ser preenchidos corretamente!");
        return;
      }


        api.put(`motoristas/${id}`, initialValues)
        .then(() => {
            alert(`Dados atualizados com sucesso!`)
            history.push('/');
        }).catch((error) =>  alert("Não foi possível atualizar os dados, tente novamente!"))
    }
    return (
      <Container id="form-input">
        <h2>Edite seus dados</h2>
        <div id="box-input" >
          <Form method="put" onSubmit={onSubmit}>
              <FormGroup >
                <Label for="nome">Nome:</Label>
                <Input type="text" name="nome" id="nome" placeholder="Nome Completo" 
                for="nome"
                {...formik.getFieldProps("nome")}
                /> {formik.errors && <DisplayErrors msgError={formik.errors.nome}/>}
              </FormGroup>
              <FormGroup>
                <Label for="dtNascimento">Data de Nascimento:</Label>
                <Input type="date" name="dtNascimento" id="dtNascimento" placeholder="00/00/0000" 
                onChange={formik.handleChange} {...formik.getFieldProps("dtNascimento")}
                /> {formik.errors && <DisplayErrors msgError={formik.errors.dtNascimento}/>}
              </FormGroup>
              <FormGroup>
                <Label for="telefone">Telefone:</Label>
                <Input type="text" name="telefone" id="telefone" placeholder="Telefone com DDD" onChange={formik.handleChange} {...formik.getFieldProps("telefone")}
                /> {formik.errors && <DisplayErrors msgError={formik.errors.telefone}/>}
              </FormGroup>
              <FormGroup>
                <Label for="cpf">CPF:</Label>
                <Input type="text" name="cpf" id="cpf" placeholder="CPF" 
                onChange={formik.handleChange} {...formik.getFieldProps("cpf")}
                /> {formik.errors && <DisplayErrors msgError={formik.errors.cpf}/>}
              </FormGroup>
              <FormGroup>
                <Label for="cnh">CNH:</Label>
                <Input type="text" name="numero" id="numero" placeholder="Número da CNH..."  onChange={formik.handleChange} {...formik.getFieldProps("cnh")}
                /> {formik.errors && <DisplayErrors msgError={formik.errors.cnh}/>}
              </FormGroup>
              <FormGroup>
                <Label for="categoria" className="categoria">Marque a(as) categoria(as) da sua CNH: </Label>
                  <CustomInput type="checkbox" id="exampleCustomCheckbox"  label="A" inline  onChange={formik.handleChange} {...formik.getFieldProps("categoria")}
                  /> {formik.errors && <DisplayErrors msgError={formik.errors.categoria}/>}
                  <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="B" inline onChange={formik.handleChange} {...formik.getFieldProps("categoria")}
                  /> {formik.errors && <DisplayErrors msgError={formik.errors.categoria}/>}
                  <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="C"  inline onChange={formik.handleChange} {...formik.getFieldProps("categoria")}
                  /> {formik.errors && <DisplayErrors msgError={formik.errors.categoria}/>}
                  <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="D" inline onChange={formik.handleChange} {...formik.getFieldProps("categoria")}
                  /> {formik.errors && <DisplayErrors msgError={formik.errors.categoria}/>}
                  <CustomInput type="checkbox" id="exampleCustomCheckbox5" label="E" inline onChange={formik.handleChange} {...formik.getFieldProps("categoria")}
                  /> {formik.errors && <DisplayErrors msgError={formik.errors.categoria}/>}
                  <CustomInput type="checkbox" id="exampleCustomCheckbox6" label="AAC" inline onChange={formik.handleChange} {...formik.getFieldProps("categoria")}
                  /> {formik.errors && <DisplayErrors msgError={formik.errors.categoria}/>}
              </FormGroup>
              <Button type="submit" className="btn-form-voltar" to="/" tag={Link}>Voltar</Button>
              <Button type="submit" className="btn-form-salvar">Salvar</Button>
              </Form>
        </div>
      </Container>   
  );
};

export default FormEditar;