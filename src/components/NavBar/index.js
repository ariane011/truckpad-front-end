import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Button, NavbarToggler, Collapse} from 'reactstrap';
import '../../assets/css/main.css'
import './style.css'
import logo from "../../assets/img/logo-com-bg.svg";

const NavBar = () => {

   const [isOpen, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" expand="md">
        <NavbarBrand className="nav-brand" href="/" data-placement="bottom" title="Logo TruckPad">
          <img src={logo} className="logo" alt="Logo TruckPad"></img>
        </NavbarBrand>
        <div className="nav-right">
        <NavbarToggler className="toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Button className="btn-inativos" to="/motoristas-inativos" tag={Link}>Motoristas inativos</Button>
          <Button className="btn-cadastrar" to="/cadastrar" tag={Link}>Cadastrar</Button>
        </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;