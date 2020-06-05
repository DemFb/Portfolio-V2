import React from 'react';
import '../App.css';
import {Modal} from 'react-bootstrap';
import Todoslide from '../Slides/Todoslide'; 



function ModalTodo (todoShow) {

  return (
          <Modal
          {...todoShow}
          size="lg"
          aria-labelledby="todo-modal"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="todo-modal">
              Todo-List
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Todoslide/>
            <p>
              Voici une todo liste avec les fonctionnalités de valider une tâche accomplie et de supprimer une tâche.
            </p>
            <div className="button-section">
              <div className="buttonGit">
                <a href="https://github.com/DemFb/Todo-list" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      );
}


export default ModalTodo