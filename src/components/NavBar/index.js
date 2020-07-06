import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Button} from 'reactstrap';
import '../../assets/css/main.css'
import './style.css'
import logo from "../../assets/img/logo-com-bg.svg";

const NavBar = () => {

  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" expand="md">
        <NavbarBrand className="nav-brand" href="/" data-placement="bottom" title="Logo TruckPad">
          <img src={logo} className="logo" alt="Logo TruckPad"></img>
        </NavbarBrand>
        {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>  */}
          <Button className="btn-cadastrar" to="/cadastrar" tag={Link}>Cadastrar</Button>
        {/* </Collapse> */}
      </Navbar>
    </div>
  );
}

export default NavBar;