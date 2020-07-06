import React, {useState, useEffect} from 'react';
import {Form, FormGroup, Label, Input, Container, CustomInput, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { useHistory, useParams } from 'react-router-dom';
import '../../assets/css/main.css'
import './style.css'
import api from '../../services/api'
   
export default function FormEditar() {
      const [nome, setNome] = useState('');
      const [telefone, setTelefone] = useState('');
      const [dtNascimento, setDtNascimento] = useState('');
      const [cpf, setCpf] = useState('');
      const [cnh, setCnh] = useState('');
      const [categoria, setCategoria] = useState([]);
      const [motorista, setMotorista] = useState('');
      const history = useHistory();

      const {id} = useParams('')

      useEffect(() => {
          api.get(`motoristas/${id}`, {
              headers: {
                  Authorization: id,
              }
          }).then(response => {
            setMotorista(response.data)
          console.log(response.data)
          })
      }, [id])

      async function handleEditar(e) {
        e.preventDefault();
  
        const data = {
            nome,
            telefone,
            dtNascimento,
            cpf,
            cnh,
            categoria
        };

        const response = await api.put(`motoristas/${id}`, data)

          try {
              alert(`Dados atualizados com sucesso!`);
              history.push('/');
          } catch (error) {
              alert("Não foi possível atualizar os dados, tente novamente!")
          }
      }

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
        }

    return (
        <Container id="form-input">
          <h2>Edite seus dados</h2>
          <div id="box-input" >
            <Form onSubmit={handleEditar}>
                <FormGroup >
                  <Label for="nome">Nome:</Label>
                  <Input type="text" name="nome" id="nome" placeholder="Nome Completo" 
                  for="nome"
                  value={motorista.nome}
                  onChange={e => setNome(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="dtNascimento">Data de Nascimento:</Label>
                  <Input type="date" name="dtNascimento" id="dtNascimento" placeholder="00/00/0000" 
                  value={motorista.dtNascimento} onChange={e => setDtNascimento(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                  <Label for="telefone">Telefone:</Label>
                  <Input type="text" name="telefone" id="telefone" placeholder="Telefone com DDD"  value={motorista.telefone} onChange={e => setTelefone(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                  <Label for="cpf">CPF:</Label>
                  <Input type="text" name="cpf" id="cpf" placeholder="CPF" 
                   value={motorista.cpf} onChange={e => setCpf(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                  <Label for="">CNH:</Label>
                  <Input type="text" name="numero" id="numero" placeholder="Número da CNH..." value={motorista.cnh} onChange={e => setCnh(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                  <Label className="categoria">Marque a(as) categoria(as) da sua CNH: </Label>
                    <CustomInput type="checkbox" id="exampleCustomCheckbox"  label="A" inline value={motorista.categoria} onChange={e => setCategoria(e.target.value)}
                    />
                    <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="B" inline value={motorista.categoria} onChange={e => setCategoria(e.target.value)} 
                    />
                    <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="C" value={motorista.categoria} inline />
                    <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="D" inline value={motorista.categoria} onChange={e => setCategoria(e.target.value)}
                    />
                    <CustomInput type="checkbox" id="exampleCustomCheckbox5" label="E" inline value={motorista.categoria} onChange={e => setCategoria(e.target.value)}
                    />
                    <CustomInput type="checkbox" id="exampleCustomCheckbox6" label="AAC" inline value={motorista.categoria} onChange={e => setCategoria(e.target.value)}
                    />
                </FormGroup>
                <Button type="submit" className="btn-form-voltar" to="/" tag={Link}>Voltar</Button>
                <Button type="submit" className="btn-form-salvar">Salvar</Button>
                </Form>
          </div>
        </Container>   
    );
};