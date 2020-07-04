import React, { useState } from 'react';
import { Modal, Button } from 'reactstrap';
import FormCadastro from '../Form/FormCadastro';

function ModalEditar() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar dados</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <FormCadastro />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalEditar;