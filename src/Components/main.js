import React from 'react'
import '../App.css';
import { Nav, Navbar } from 'react-bootstrap';



class Main extends React.Component {
    render(){
        return (
            <div>
            <Navbar expand="lg">
            <Navbar.Brand href="/">Dembele Fabala</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navbody">
                <Nav.Link href="/#contact" >À propos</Nav.Link>
                <Nav.Link href="/#projets">Projets</Nav.Link>
                <Nav.Link href='/CV.pdf' target="_blank">Mon CV</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
        )
    }    
}

export default Main;