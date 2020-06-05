import React from 'react';
import '../App.css';
import {Modal} from 'react-bootstrap';
import Tabslide from '../Slides/Tabslide';


function ModalTab(tabShow) {
    return (
      <Modal
        {...tabShow}
        size="lg"
        aria-labelledby="tab-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="tab-modal">
            Tab Music
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabslide/>
          <p>
          Creation d'une table d'effets sonnores avec et l'apparation d'une bulle de la même couleur que la touche que vous avez cliquer.
          </p>
          <div className="button-section">
              <div className="buttonGit">
                <a href="https://github.com/DemFb/Tap-Music" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  

export default ModalTab