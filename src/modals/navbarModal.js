import React from 'react';
import '../App.css';
import {Modal} from 'react-bootstrap';
import Navbarslide from '../Slides/Navbarslide';


function ModalNavbar(navbarShow) {
    return (
      <Modal
        {...navbarShow}
        size="lg"
        aria-labelledby="navbar-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="navbar-modal">
            Nav-bar 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Navbarslide/>
          <p>
            Voici une barre de navigation qui détecte et s'adapte à la couleur de la 
            section en scrollant vers le bas ou vers le haut.
          </p>
          <div className="button-section">
            <div className="buttonGit">
              <a href="https://github.com/DemFb/navBar-Animation" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  

export default ModalNavbar