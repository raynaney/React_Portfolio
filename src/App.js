import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Background from "./brd3.jpg";
import ProfilePic from "./Me.JPEG";
import Figure from "react-bootstrap/Figure";
import { MDBMask, MDBView } from "mdbreact";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div Navbar>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Education</Nav.Link>
              <Nav.Link href="#pricing">Experience</Nav.Link>
              <Nav.Link href="#pricing">Ceramics Club</Nav.Link>
              <Nav.Link href="#pricing">Projects</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Contact Me</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Meme of the Day
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Image src={Background} fluid />
      <Figure>
        <Figure.Image
          width={200}
          height={180}
          alt="Profile Pic"
          src={ProfilePic}
          roundedCircle
        />
      </Figure>
      <MDBView hover zoom>
        <img src={ProfilePic} className="img-fluid" alt="" />
        <MDBMask className="flex-center">
          <p className="white-text">Zoom effect</p>
        </MDBMask>
      </MDBView>

      <MDBView hover>
        <img
          src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
          className="img-fluid"
          alt=""
        />
        <MDBMask className="flex-center" overlay="red-strong">
          <p className="white-text">Strong overlay</p>
        </MDBMask>
      </MDBView>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </div>
  );
}

export default App;
