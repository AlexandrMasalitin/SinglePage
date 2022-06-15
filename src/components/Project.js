import React, { Component } from "react";
import {Row, Col, Card, CardImg} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import CardHeader from "react-bootstrap/esm/CardHeader";
import code from "../assets/code.jpg"
import chess from "../assets/chess.jpg"
import bootstrap from "../assets/boot-logo.jpg";
import book from "../assets/search-book.jpg"
import Git from "../assets/git.jpg"
import reactLogo from "../assets/react.jpg"


export default class Project extends Component {



  render() {
    return (
      <div className="projects" id="Projects">
        <h1 className="title-components">Projects / Проекты</h1>
        <Row  >
      <Col md="4" className="pb-3" id='tr-property3'>
        <Card className="text-center">
          <CardImg src={code} alt="img" className="img-fluid"/>
          <CardHeader><strong>First steps Front-end courses</strong></CardHeader>
          <Card body>Courses в EasyCode School 
          <br></br>
          Teacher Oleg Lustenko</Card>
          <Nav.Link  className="btn btn-dark mt-auto "  href="https://github.com/AlexandrMasalitin/JsEasyCode"><span className="color-text"> Github </span></Nav.Link>
        </Card>
      </Col>
      <Col md="4" className="pb-5" id='tr-property3'>
        <Card className="text-center">
        <CardImg src={bootstrap} alt="img" className="img-fluid"/>
        <CardHeader><strong>Introduction to Bootstrap v. 3</strong></CardHeader>
          <Card body>Solo experience
          <br></br>
          Bootstrap v. 3
          </Card>
          <Nav.Link className="btn btn-dark mt-auto"   href="https://github.com/AlexandrMasalitin/bootstrap"><span className="color-text"> Github </span></Nav.Link>
        </Card>
      </Col>
      <Col md="4" className="pb-5" id='tr-property3'>
        <Card className="text-center">
        <CardImg src={book} alt="img" className="img-fluid"/>
        <CardHeader><strong>Search Book</strong></CardHeader>
          <Card body>Introduction to Bootstrap v. 4 
          <br></br>
          Solo experience</Card>
          <Nav.Link className="btn btn-dark  mt-auto"   href="https://github.com/AlexandrMasalitin/bootstrap4"><span className="color-text"> Github </span></Nav.Link>
        </Card>
      </Col>
    </Row>
    <Row >
      <Col md="4" className="pb-5" id='tr-property3'>
        <Card className="text-center">
          <CardImg src={code } alt="img" className="img-fluid "/>
          <CardHeader><strong>First steps after 4 year break</strong></CardHeader>
          <Card body>HTML , CSS , JavaScript 
          <br></br>
          First step in React</Card>
          <Nav.Link className="btn btn-dark mt-auto "  href="https://github.com/AlexandrMasalitin/New"><span className="color-text"> Github </span></Nav.Link>
        </Card>
      </Col>
      <Col md="4" className="pb-5" id='tr-property3'>
        <Card className="text-center">
        <CardImg src={Git} alt="img" className="img-fluid"/>
        <CardHeader><strong>First steps Git </strong></CardHeader>
          <Card body>Working with Git
          <br></br>
          Git + Github</Card>
          <Nav.Link className="btn btn-dark mt-auto"   href=" https://github.com/AlexandrMasalitin/git"><span className="color-text"> Github </span></Nav.Link>
        </Card>
      </Col>
      <Col md="4" className="pb-5" id='tr-property3'>
        <Card className="text-center">
        <CardImg src={reactLogo} alt="img" className="img-fluid"/>
        <CardHeader><strong>React + Bootstrap</strong></CardHeader>
          <Card body>Youtube online course 
          <br></br>
          WebDeveloper Blog chanel</Card>
            <Nav.Link className="btn btn-dark mt-auto"   href="https://github.com/AlexandrMasalitin/React-bootstrap"><span className="color-text"> Github </span></Nav.Link>
        </Card>
      </Col>
    </Row>
    <Row >
      <Col md="4" className="pb-5" id='tr-property3'>
        <Card className="text-center">
          <CardImg src={chess} alt="img" className="img-fluid"/>
          <CardHeader><strong>React + TypeScript</strong></CardHeader>
          <Card body>Chess
          <br></br>
          My first game</Card>
          <Nav.Link className="btn btn-dark mt-auto"  href="https://github.com/AlexandrMasalitin/chess"><span className="color-text"> Github </span></Nav.Link>
        </Card>
      </Col>
      <Col md="4" className="pb-5" id='tr-property3'>
        <Card className="text-center">
        <CardImg src={code} alt="img" className="img-fluid"/>
        <CardHeader><strong>Some Text</strong></CardHeader>
          <Card body>Some Text
          <br></br>
          Some Text</Card>
          <Nav.Link className="btn btn-dark mt-auto"  href="https://github.com/AlexandrMasalitin"><span className="color-text"> Github </span></Nav.Link>
        </Card>
      </Col>
      <Col md="4" className="pb-5" id='tr-property3'>
        <Card className="text-center">
        <CardImg src={code} alt="img" className="img-fluid"/>
        <CardHeader><strong>Some Text</strong></CardHeader>
          <Card body>Some text
          <br></br>
          Some Text</Card>
          <Nav.Link className="btn btn-dark mt-auto"  href="https://github.com/AlexandrMasalitin"><span className="color-text"> Github </span></Nav.Link>
        </Card>
      </Col>
    </Row>
      </div>
    );
  }
}
