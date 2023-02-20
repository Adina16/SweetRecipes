import React from "react";
import { Navbar, Nav, Form, Container, Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Recipes from "../pages/recipes";
import NotFound from "../pages/notfound";
import LoginModal from "./LoginModal";

export const NavbarComp = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar bg="light" variant={"light"} expand="lg">
          <Container fluid>
            <Navbar.Brand href as={Link} to={"/"}>
              SweetCake
            </Navbar.Brand>
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
                {/* <Button variant="outline-success">Login</Button> */}
                <LoginModal />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/recipes" element={<Recipes />}></Route>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default NavbarComp;
