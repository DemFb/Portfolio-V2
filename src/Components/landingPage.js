import React from 'react';
import '../App.css';
import { Jumbotron } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import Main from './main';



const LandingPage = () =>  {

        return (
            <Jumbotron className="jumbo-body">
                  <Main/>
                  <div className='banner-text'> 
                        <h2 className='banner-title'>Développeur Web FullStack</h2>
                        <hr/>
                        <p className="lead">
                            
                            <a  href="https://www.linkedin.com/in/fabala-dembele/" target="_blank" rel="noopener noreferrer"  > 
                              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" className='font-icon1'/>
                            </a> 
                        
                            <a href="https://github.com/DemFb?tab=repositories" target="_blank" rel="noopener noreferrer"  > 
                              <FontAwesomeIcon icon={faGithubSquare} aria-hidden="true" className='font-icon2' />
                            </a>   

                            <a href="tel:+33695355193" rel="noopener noreferrer" > 
                              <FontAwesomeIcon icon={faPhoneSquare} aria-hidden="true" className='font-icon3' />
                            </a>

                            <a href="mailto:dembele.fabala@gmail.com" rel="noopener noreferrer"> 
                              <FontAwesomeIcon icon={faEnvelopeSquare} aria-hidden="true" className='font-icon4' />
                            </a>              
                        </p>
                  </div>          
                </Jumbotron>            
                
        )
    
}

export default LandingPage;