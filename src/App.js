import logo from './logo.svg';
import './App.css';
import bg from './bg.jpg'


import React, { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link } from "react-router-dom";

//import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link> */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
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
          </>
        }/>
        <Route path="/detail" element={<div>상세페이지임</div>}/>
        <Route path="/about" element={<div>어바웃페이지임</div>}/>
      </Routes>
    </div>
  );
}

const ColComponent = (props) => {
  return (
    <div className="col-md-4">
      <img src={props.shoes.url} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  )
}

export default App;
