import React from "react";
import { useFormik } from "formik";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup} from "reactstrap";
import './style.css'

const initialValues = {
    nome: "",
    dataNascimento: "",
    telefone: "",
    cpf: "",
    cnh: {
        numero: "",
        tipo: ""
    },
};

const FormCadastro = () => {
    const onSubmit = values => {};

    const formik = useFormik({
        initialValues,
        onSubmit  
    });

    return (
        <div className="principal">
            <form>
                <FormGroup>
                    <Form.Control placeholder="Nome completo" {...formik.getFieldProps("nome")} />
                    <br />
                    <Form.Control type="data" placeholder="Data de Nascimento" {...formik.getFieldProps("dataNascimento")} />
                    <br />
                    <Form.Control type="number" placeholder="Telefone" {...formik.getFieldProps("telefone")} />
                    <br />
                    <Form.Control type="number" placeholder="CPF" {...formik.getFieldProps("cpf")} />
                    <br />
                    <Form.Control placeholder="CNH" {...formik.getFieldProps("cnh.numero")} />
                    <br />
                    <Form.Control placeholder="Tipo" {...formik.getFieldProps("cnh.tipo")} />
                </FormGroup>
            </form>
        </div>
    );
};

export default FormCadastro;