import React from "react";
import { Container, Nav } from "react-bootstrap";
import img1 from "../../images/travely_logo.JPG";

const Navbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={img1}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            Travely
          </Navbar.Brand>
        </Container>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Tour Packages</Nav.Link>
        <Nav.Link href="#pricing">About us</Nav.Link>
        <Nav.Link href="#pricing">Contact us</Nav.Link>
      </Navbar>
    </div>
  );
};

export default Navbar;
