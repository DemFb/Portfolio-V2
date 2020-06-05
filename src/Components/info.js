import React from 'react';
import '../App.css';

const About = () => {
    return (
  
        <div className='contact-section' id='contact'>
            <h2 >À propos</h2>
            <hr />

            <div style={{display:'flex', height:'fit-content'}}>
                <div className='contact-body'>
                    <p style={{width:'80%'}}>
                        Salut, je m'appelle Fabala
                        <br/>
                        <br/>
                        Je suis étudiant à la <a href='https://codingfactory.fr' target='_blank' rel="noopener noreferrer">Coding Factory by ITESCIA</a> en alternance et été 
                        formé à <a href='https://www.lacapsule.academy' target='_blank' rel="noopener noreferrer">La Capsule</a>, j'aime 
                        beaucoup apprendre à réaliser des sites design et attractifs et de réaliser des projets du côté serveur.
                        <br/>
                        <br/>
                          Passionné de sports, de nouvelles technologies et de programmation en quête
                          de challenges à relever sur des projets novateurs et à la découverte de nouvelles 
                          technologies à apprendre. Je suis très adaptable et motivé par l'apprentissage.
                        <br/>
                        <br/>
                        Je suis capable d'utiliser différentes technologies comme HTML, CSS, JavaScript ou 
                        Node JS, mais aussi les frameworks tel que React pour le Front-End et Express pour 
                        le Back-end.
                    </p>
                </div>
            </div>

            
            <div className='section-body'>
               <div className='skill-section'>
                <h3>Compétences</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS <span>Flexbox/Bootstrap</span></li>
                    <li>JavaScript <span>Es6+</span></li>
                    <li>Jquery</li>
                    <li>React <span>React-bootstrap</span></li>
                    <li>React Native</li>
                    <li>Node Js <span>Express</span></li> 
                    <li>MongoDB</li>
                    <li>Heroku</li>
                </ul>
            </div> 
            <div className='tool-section'>
                <h3>Outils</h3>
                <ul>
                    <li>Visual studio code</li>
                    <li>Figma</li>
                    <li>Git - GitHub</li>
                </ul>
            </div> 
            </div>
        </div>
    )
}

export default About