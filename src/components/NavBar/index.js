import React, { useState } from 'react';
import { useLocation } from 'react-router';
import classnames from "classnames";
import logo from "../../assets/img/logo-sem-bg.svg";
import logoSemBg from "../../assets/img/logo-sem-bg.svg";
import { Link } from "react-router-dom";
import './style.css'
import '../../assets/css/main.css'
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button
} from "reactstrap";

function NavBar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const location = useLocation();
  
     const toggleNavbarCollapse = () => {
       setNavbarCollapse(!navbarCollapse);
       document.documentElement.classList.toggle("nav-open");
     };
  
      React.useEffect(() => {
  
        if(location.pathname === '/' || location.pathname === '/cadastrar') {
          setNavbarColor('navbar-transparent navbar-transparent---white');
        } else {
          setNavbarColor('navbar-transparent');
        }
  
       const updateNavbarColor = () => {
         if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
           setNavbarColor("");
  
         } else if ( document.documentElement.scrollTop < 50 || document.body.scrollTop < 50 ) {
           if(location.pathname === '/' || location.pathname === '/cadastrar') {
             setNavbarColor('navbar-transparent navbar-transparent---white');
           } else {
             setNavbarColor("navbar-transparent");
           }
  
         } else if ( (document.documentElement.scrollTop === 0 ||
           document.body.scrollTop === 0) && 
           (document.getElementsByClassName('page-header').length === 0 ||
           document.getElementsByClassName('section section-dark').length === 0)) {
           setNavbarColor("");
         }
       };
  
       window.addEventListener("scroll", updateNavbarColor);
  
       return function cleanup() {
         window.removeEventListener("scroll", updateNavbarColor);
       };
    }, [location]);

    return (
      <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
        <Container>
          <div className="navbar-translate">

            <NavbarBrand
              data-placement="bottom"
              href="/"
              title="Logo TruckPad">

                <img src={navbarColor === 'navbar-transparent' ? logo : logoSemBg} className="logo" alt="Logo TruckPad"></img>
            
            </NavbarBrand>
            <NavItem>
            <Button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", "btn-cadastrar", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
            to="/cadastrar"
            tag={Link}
          >Cadastrar
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </Button>
            {/* <Button 
              className="btn-cadastrar"
              to="/cadastrar"
              tag={Link}
            >
              Cadastrar
            </Button> */}
            </NavItem>
          </div>
          {/* <Collapse
            className="justify-content-end"
            navbar
             isOpen={navbarCollapse}
          >
          </Collapse> */}
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;