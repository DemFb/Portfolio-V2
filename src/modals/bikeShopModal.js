import React from 'react';
import '../App.css';
import {Modal} from 'react-bootstrap';
import Bikeslide from '../Slides/Bikeslide';


function ModalBike(modalShow) {
    return (
      <Modal
        {...modalShow}
        size="lg"
        aria-labelledby="bike-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="bike-modal">
            Bike shop
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Bikeslide/>
          <p>
            Création d'un site résponsive de e-commerce dans le domaine des vélos
             avec un catalogue proposant différents vélos et les fonctionnalités d'un site e-commerce.
          </p>
          <div className="button-section">
            <div className="buttonGit">
              <a href="https://github.com/DemFb/BikeShop" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  

export default ModalBike