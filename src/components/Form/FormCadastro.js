import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Container, CustomInput, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import '../../assets/css/main.css'
import './style.css'
import api from '../../services/api'
   
export default function FormCadastrar() {
      const [nome, setNome] = useState('');
      const [telefone, setTelefone] = useState('');
      const [dtNascimento, setDtNascimento] = useState('');
      const [cpf, setCpf] = useState('');
      const [cnh, setCnh] = useState('');
      const [categoria, setCategoria] = useState('');

      const history = useHistory();
  
      async function handleFormInput(e) {
          e.preventDefault();
  
          const data = {
              nome,
              telefone,
              dtNascimento,
              cpf,
              cnh,
              categoria
          };

          const response = await api.post('motoristas', data);
          console.log(data)
  
          try {
            alert(`Seu ID de acesso: ${response.data.id}`);
              history.push('/');
          } catch (error) {
              alert(`Erro ao se cadastrar, tente novamente`)
          }
      }

    return (
        <Container id="form-input">
            <h2>Cadastre um novo motorista</h2>
            <div id="box-input" >
              <Form onSubmit={handleFormInput}>
                  <FormGroup>
                    <Label for="nome">Nome:</Label>
                    <Input type="text" name="nome" id="nome" placeholder="Nome Completo" 
                    value={nome} onChange={e => setNome(e.target.value)}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="dtNascimento">Data de Nascimento:</Label>
                    <Input type="date" name="dtNascimento" id="dtNascimento" placeholder="00/00/0000" 
                    value={dtNascimento} onChange={e => setDtNascimento(e.target.value)}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="telefone">Telefone:</Label>
                    <Input type="text" name="telefone" id="telefone" placeholder="Telefone com DDD"  value={telefone} onChange={e => setTelefone(e.target.value)}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="cpf">CPF:</Label>
                    <Input type="text" name="cpf" id="cpf" placeholder="CPF" 
                    value={cpf} onChange={e => setCpf(e.target.value)}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="">CNH:</Label>
                    <Input type="text" name="numero" id="numero" placeholder="Número da CNH..." value={cnh} onChange={e => setCnh(e.target.value)}/>
                  </FormGroup>
                  <FormGroup>
                    <Label className="categoria">Marque a(as) categoria(as) da sua CNH: </Label>
                      <CustomInput type="checkbox" id="exampleCustomCheckbox"  label="A" inline value={categoria} onChange={e => setCategoria(e.target.value)}
                      />
                      <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="B" inline value={categoria} onChange={e => setCategoria(e.target.value)} 
                      />
                      <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="C" inline />
                      <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="D" inline value={categoria} onChange={e => setCategoria(e.target.value)}
                      />
                      <CustomInput type="checkbox" id="exampleCustomCheckbox5" label="E" inline value={categoria} onChange={e => setCategoria(e.target.value)}
                      />
                      <CustomInput type="checkbox" id="exampleCustomCheckbox6" label="AAC" inline value={categoria} onChange={e => setCategoria(e.target.value)}
                      />
                  </FormGroup>
                  <Button type="submit" className="btn-form-voltar" to="/" tag={Link}>Voltar</Button>
                  <Button type="submit" className="btn-form-cadastrar">Cadastrar</Button>
              </Form>
            </div>
        </Container>   
    );
};