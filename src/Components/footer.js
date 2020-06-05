import React from 'react';
import '../App.css';
import { Navbar } from 'react-bootstrap'

const FooterPage = () => {
    return (

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{justifyContent:'center', padding: '.9rem 1rem', margin:'0', fontFamily:'Montserrat,sans-serif', borderTopLeftRadius:'0px', borderTopRightRadius:'0px',}}>
                <Navbar.Brand href="/"> Copyright © Dembele Fabala 2020</Navbar.Brand>
         </Navbar>
    )
}

export default FooterPage