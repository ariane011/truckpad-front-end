import React from 'react';
import { Container, Form, Row, Col } from "reactstrap";
import Search from './Search';
import './SearchMotorista/style.css';

const SearchMotorista = (props) => {

    return (
        <>
        <div className="search-highlight">
            <Container>
                <Row>
                    <Col className="mx-auto" md="10">
                        <Form className="register-form search-form search-form-color">
                            <Search maxLength="40" />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default SearchMotorista;