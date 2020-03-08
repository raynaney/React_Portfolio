import React, { Component, Fragment } from "react";
import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Image from "react-bootstrap/Image";
import Background from "./brd3.jpg";
import ProfilePic from "./Me.png";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";

import "./App.css";

const HeroSection = styled.div`
  margin: 0px;
  text-align: center;

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://imgur.com/YcAASWE.jpg");

  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const MiddleContent = styled.div`
  text-align: center;
  padding: 5%;
  display: flex;
`;

const Footer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row;
  background: rgb(255, 246, 235);
  text-align: center;
  height: auto;
  min-height: 200px;
`;
const Title = styled.div`
  font-size: 50px;
  // font-weight: bold;
`;

const ImageCard = styled.div`
  color: #fff;
  border-radius: 0.5em;
  // border: 2px solid lightgrey;
  padding: 0.5em;
  flex: 1;
  position: relative;
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 4px 8px lightgrey;
    transform: translateY(-4px);
  }
`;

const ImageCard1 = styled.div`
  color: #fff;
  border-radius: 0.5em;
  // border: 2px solid lightgrey;
  padding 7em 10em 22em 10em;
  filter: brightness(90%);
  
  flex: 1;
  position: relative;
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 4px 8px lightgrey;
    transform: translateY(-4px);
  }
`;

const hero_img = {
  minWidth: "100px",
  maxWidth: "100px",
  width: "30%"
};

const icon = {
  width: "30px",
  margin: "10px"
};

function App() {
  return (
    <div className="App">
      {/*
      START NAV BAR
      */}
      <div Navbar>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#ceramicsClub">Ceramics Club</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#contactMe">Contact Me</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Meme of the Day
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {/*
      END NAV BAR
       */}
      <Fragment>
        <HeroSection>
          <ImageCard1>
            <img
              classname="profile"
              alt="Pic of me"
              width="150px"
              // width="30%"
              src={ProfilePic}
            />
            <div
              style={{ color: "white", paddingTop: "1em", fontSize: "30px" }}
            >
              RAYNA NEY
            </div>
            <div
              style={{ color: "white", paddingTop: "0em", fontSize: "17px" }}
            >
              "Looking for a job"
            </div>
            <MiddleContent>
              <ImageCard>
                <img
                  width="100%"
                  alt="first img"
                  src="https://cdn.dribbble.com/users/1355613/screenshots/7108346/media/4d5498d6903b88fe4ff581d9c35a72e1.jpg"
                />
              </ImageCard>
              <ImageCard>
                <img
                  width="100%"
                  alt="second img"
                  src="https://cdn.dribbble.com/users/1355613/screenshots/6292314/bus_stop_4x.jpg"
                />
              </ImageCard>
              <ImageCard>
                <img
                  width="100%"
                  alt="third img"
                  src="https://cdn.dribbble.com/users/1355613/screenshots/6568571/____41_4x.jpg"
                />
              </ImageCard>
            </MiddleContent>
          </ImageCard1>
        </HeroSection>
      </Fragment>
    </div>
  );
}

export default App;
