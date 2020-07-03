import React from "react";
import { Container } from "reactstrap";
import './style.css'
import '../../assets/css/main.css'

function Header({props}) {
 const { urlImg, title} = props;
  
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage: `url(${urlImg})`
        }}
      >
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="title">{title}</h1>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Header;
