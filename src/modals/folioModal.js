import React from 'react';
import '../App.css';
import {Modal} from 'react-bootstrap';
import Folioslide from '../Slides/Folioslide';


function ModalFolio(folioShow) {
    return (
      <Modal
        {...folioShow}
        size="lg"
        aria-labelledby="folio-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="folio-modal">
            Portfolio v.1
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Folioslide/>
          <p>
            Voici mon tout premier site en tant que développeur web, un site portfolio 
            qui répertorie quelques projets que j'ai pu réaliser.
          </p>
          <div className="button-section">
            <div className="buttonGit">
              <a href="https://github.com/DemFb/Porte-Folio" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  

export default ModalFolio