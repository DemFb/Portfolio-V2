import React from 'react';
import '../App.css';
import {Modal} from 'react-bootstrap';
import Animslide from '../Slides/Animslide';


function ModalAnim(animShow) {
    return (
      <Modal
        {...animShow}
        size="lg"
        aria-labelledby="anim-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="anim-modal">
            Bike Animation 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Animslide/>
          <p>
           Création d'une animation avec une image format SVG.
          </p>
          <div className="button-section">
            <div className="buttonGit">
              <a href="https://github.com/DemFb/Bike-animation" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  

export default ModalAnim