import React from "react";
import {
  Navbar,
  Nav,
  Form,
  Container,
  Button,
} from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Recipes from "./Recipes";

export const NavbarComp = () => {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">SweetCake</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href as={Link} to={"/home"}>
                    Home
                  </Nav.Link>
                  <Nav.Link href as={Link} to={"/about"}>
                    About
                  </Nav.Link>
                  <Nav.Link href as={Link} to={"/recipes"}>
                    Recipes
                  </Nav.Link>
                  <Nav.Link href as={Link} to={"/contact"}>
                    Contact
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
        <Routes>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact"element={<Contact/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/recipes" element={<Recipes/>}></Route>
            </Routes>
        </div>
 
      </BrowserRouter>
    );
  }


  export default NavbarComp;
