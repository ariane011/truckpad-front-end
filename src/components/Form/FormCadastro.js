import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Form, FormGroup, Label, Input, Container, CustomInput } from 'reactstrap';
import './style.css'

// const validationSchema = Yup.object().shape({
//     email: Yup.string()
//       .email('Email inválido')
//       .required('Obrigatório')
//   });
  
  const initialValues = {
      avatar: "",
      nome: "",
      telefone: "",
      cpf: "",
      cnh: {
        numero: "",
        tipo: ""
      }
  };
  
  
  const FormCadastro = () => {
    
    const onSubmit = (e) => {
      e.preventDefault()
      let errors = formik.errors
      let values = formik.values
  
      if (Object.keys(errors).length > 0 || values.email === "" ) {
        alert("Os dados devem ser preenchidos corretamente!");
        return;
      }
      
      let file = values.avatar
      let path = `images/${file.name}`
      
      const avatar = path
      const nome = values.nome
      const telefone = values.telefone
      const cpf = values.cpf
      const numero = values.cnh.numero
      const tipo = values.cnh.tipo
      
      let object = {
        avatar,
        nome,
        telefone,
        cpf,
        numero,
        tipo
        }
      }
    //   FirebaseService.createUser(email, senha)
    //   .then((user) => {
    //     object.uid = user.user.uid
    //     FirebaseService.storageFile(file, path)
    //     FirebaseService.setData("usuarios/"+object.uid, object)
    //     setTimeout(function(){
    //       window.location.replace(window.location.origin)
    //     }, 2000);
    //     return;
    //   })
    //   .catch((error) => {
    //       alert("Não foi possível cadastrar. Tente novamente.")
    //       return;
    //   })
    // }
  
  
    const formik = useFormik({
      initialValues,
    //   validationSchema
    });
  
    const DisplayErrors = (props) => {
      const { msgError } = props
      return(
        <>
        {msgError && <span className="validate-error">
          {msgError}
        </span>}
        </>
      )
    }
    return (
        <Container id="form-cadastrar">
        <h2 className="title-form">Cadastre um novo motorista</h2>
          <div id="box-cadastrar">
              <Form method="post" onSubmit={onSubmit}>
              <FormGroup>
                  <Label for="avatar">Foto de Perfil</Label>
                  <CustomInput 
                    type="file" 
                    name="avatar" 
                    id="avatar" 
                    label="Escolha uma imagem" 
                    onChange={(event) => {
                      formik.values.avatar = ""
                      if (typeof event.target.files[0] !== "undefined") {
                        formik.values.avatar = event.target.files[0];
                      }
                    }} 
                  />
                  {formik.errors && <DisplayErrors msgError={formik.errors.avatar}/>}
                </FormGroup>
                <FormGroup>
                  <Label for="nome">Nome:</Label>
                  <Input type="text" name="nome" id="nome" placeholder="Nome Completo..." {...formik.getFieldProps("nome")} />
                  {formik.errors && <DisplayErrors msgError={formik.errors.nome}/>}
                </FormGroup>
                <FormGroup>
                  <Label for="telefone">telefone:</Label>
                  <Input type="text" name="telefone" id="telefone" placeholder="Telefone..." {...formik.getFieldProps("telefone")} />
                  {formik.errors && <DisplayErrors msgError={formik.errors.telefone}/>}
                </FormGroup>
                <FormGroup>
                  <Label for="cpf">cpf:</Label>
                  <Input type="text" name="cpf" id="cpf" placeholder="CPF" {...formik.getFieldProps("cpf")} />
                  {formik.errors && <DisplayErrors msgError={formik.errors.cpf}/>}
                </FormGroup>
                <FormGroup>
                  <Label for="">CNH:</Label>
                  <Input type="text" name="numero" id="numero" placeholder="Número da CNH..." {...formik.getFieldProps("numero")} />
                  {formik.errors && <DisplayErrors msgError={formik.errors.numero}/>}
                </FormGroup>
                <FormGroup>
                  <Label for="">Tipo:</Label>
                  <Input type="text" name="tipo" id="tipo" placeholder="Informe a categoria da sua CNH" {...formik.getFieldProps("tipo")} />
                  {formik.errors && <DisplayErrors msgError={formik.errors.tipo}/>}
                </FormGroup>
                <Button className="btn-form-cadastrar">Cadastrar</Button>
              </Form>
          </div>
        </Container>
      );
    };
    
export default FormCadastro;