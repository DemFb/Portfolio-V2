import React from 'react';
import '../App.css';
import {Modal} from 'react-bootstrap';
import Markdownslide from '../Slides/Markdownslide';


function ModalMarkdown(markdownShow) {
    return (
      <Modal
        {...markdownShow}
        size="lg"
        aria-labelledby="markdown-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="markdown-modal">
            Markedown
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Markdownslide/>
          <p>
           Création d'un éditeur markedown avec un côté où on peut écrire ce que l'on veut et 
           de l'autre où on peut voir le résultat avec une sauvegarde automatique même si on actualise la page.
          </p>
          <div className="button-section">
              <div className="buttonGit">
                <a href="https://github.com/DemFb/Markdown-React" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  

export default ModalMarkdown