import React from 'react';
import '../App.css';
import {Modal} from 'react-bootstrap';
import Speechslide from '../Slides/Speechslide';


function ModalSpeech(speechShow) {
    return (
      <Modal
        {...speechShow}
        size="lg"
        aria-labelledby="speech-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="speech-modal">
            Speech
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Speechslide/>
          <p>
            Voici un speech qui permet de reconnaitre et de restranscrire 
            la phrase avec une réponse adaptée en fonction de la phrase. 
          </p>
          <div className="button-section">
              <div className="buttonGit">
                <a href="https://github.com/DemFb/Speech" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
        </Modal.Body>
      </Modal>
    );
  }
  

export default ModalSpeech