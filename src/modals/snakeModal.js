import React from 'react';
import '../App.css';
import {Modal} from 'react-bootstrap';
import Snakeslide from '../Slides/Snakeslide';


function ModalSnake(snakeShow) {
    return (
      <Modal
        {...snakeShow}
        size="lg"
        aria-labelledby="snake-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="snake-modal">
            Snake
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Snakeslide/>
          <p>
          Création du jeu snake avec les fonctionnalités de score, d'apparition aléatoire de la pomme,
          de collision sur les murs et sur le corps du serpent.
          </p>
          <div className="button-section">
            <div className="buttonGit">
              <a href="https://github.com/DemFb/Snake" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  

export default ModalSnake