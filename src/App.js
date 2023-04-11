import logo from './logo.svg';
import './App.css';
import bg from './bg.jpg'


import React, { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';

//import 'bootstrap/dist/css/bootstrap.min.css';
const ColComponent = (props) => {
  return (
    <div className="col-md-4">
      <img src={props.shoes.url} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  )
}


function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{ backgroundImage : 'url('+ bg +')'}}></div>

      <div className="container">
        <div className="row">
        
        {
          shoes.map((a,i)=>{
            return (
              <ColComponent shoes = {shoes[i]}/> 
            )
          })
        }
        </div>
      </div>

      <Button as="a" variant="success">
        Button as link
      </Button>
    </div>
  );
}

export default App;
