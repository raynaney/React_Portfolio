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
  z-index: -2;
`;

const HeroSectionBout = styled.div`
  margin: 0em 2em 0em 2em;
  padding: 2em 2em 2em 2em;
  text-align: center;

  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("https://imgur.com/FjZVz5S.jpg");
  border-radius: 0.5em;

  text-color: black;

  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;
`;

const HeroSection1 = styled.div`
  margin: 0px;
  text-align: center;

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://imgur.com/FjZVz5S.jpg");

  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;
`;

const MiddleContent = styled.div`
  text-align: center;
  padding: 0%;
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
  margin-top: 3em;
  padding 7em 10em 12em 10em;
  filter: brightness(90%);
  
  flex: 1;
  position: relative;
  transition: all 0.2s ease-out;

  // &:hover {
  //   box-shadow: 4px 8px lightgrey;
  //   transform: translateY(-4px);
  // }
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
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#education">Home</Nav.Link>
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
              style={{
                color: "white",
                paddingTop: "0em",
                paddingBottom: "7em",
                fontSize: "17px"
              }}
            >
              Student at UC Davis
            </div>
            <MiddleContent>
              <ImageCard>
                <a href="https://docs.google.com/document/d/1ipm8aO0Jeu0-PzTGlzSkgs0bbT2LGlCyYi502nzTfo8/edit?usp=sharing">
                  <img
                    width="23%"
                    alt="resume"
                    src="https://imgur.com/VNx9e1W.png"
                    style={{
                      color: "white"
                    }}
                  />
                </a>
              </ImageCard>

              <ImageCard>
                <a href=" https://www.linkedin.com/in/rayna-ney/">
                  <img
                    width="20%"
                    alt="linkedin"
                    src="https://imgur.com/WIduZDb.png"
                  />
                </a>
              </ImageCard>
              <ImageCard>
                <img
                  width="20%"
                  alt="github"
                  src="https://imgur.com/GD0j1Jk.png"
                  style={{
                    color: "white"
                  }}
                />
              </ImageCard>
            </MiddleContent>
          </ImageCard1>
        </HeroSection>
        <HeroSectionBout>
          <p>
            WHO I AM: I am a third-year student at UC Davis majoring in
            Cognitive Science with a Computational Emphasis. I will be
            graduating this June. I am currently involved in a Developmental
            Psychology Lab where I develop surveys using different software. I
            have also developed software for a fake chatroom that was used in
            one of the lab's experiments. In addition to developing experimental
            techniques, I also run participants and collect experimental data. I
            was born and raised in the LA area and decided to pursue a degree in
            the Bay Area. When I am not studying, I run the Ceramics Club with a
            group of passionate ceramic artists. I also enjoy reading, designing
            websites, and running. WHAT I WANT TO DO: I want to practice law in
            intellectual property. It has always been a dream of mine to help
            facilitate the creative process of inventors to bring innovation
            into the world. I also believe that in a world of rapidly changing
            tech, democracy must be changed to accommodate the power of big data
            and it's implications on election advertising. WHAT MAKES ME
            DIFFERENT: I like to approach problems differently by finding
            unconventional solutions to complex challenges. Having a background
            in both computer science and art gives me a unique perspective on
            how to undertake new projects. Like a painter learns a new technique
            with a brush, a coder learns a new method of implementing an
            algorithm to accomplish a vision (from the novella Hackers and
            Painters). MY SKILL SET: Programming languages: Proficient in
            Python, C++, and Matlab. Beginner in Javascript, HTML, R Studio and
            APIs. Other useful skills: Data algorithms, Microsoft Word, Excel,
            video editing software, and Powerpoint Soft Skills: Excellent
            interpersonal skills, leadership skills, and adaptability
          </p>
        </HeroSectionBout>
      </Fragment>
    </div>
  );
}

export default App;
