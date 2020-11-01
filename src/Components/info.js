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
                        Bienvenue sur mon site, je m'appelle Fabala
                        <br/>
                        <br/>
        
                        Je suis un jeune sportif dynamique et passionné de nouvelles technologies, en quête de challenge à relever sur des projets novateurs. 
                        Curieux et passionné de développement web, j'aime réaliser des sites design et des projets créatifs.
        
                        <br/>
        
                        J’ai décidé de me lancer à l’aventure pour devenir développeur web à<a href='https://www.lacapsule.academy' target='_blank' rel="noopener noreferrer">La Capsule</a> 
                        puis à la <a href='https://codingfactory.fr' target='_blank' rel="noopener noreferrer">Coding Factory by ITESCIA</a> en alternance avec un rythme d'une semaine en
                        entreprise et d'une semaine à l'école hors période des vacances scolaires où c'est à temps plein en entreprise.
                           
                        <br/>         
      
                        Profitez de la prime exceptionnelle de 5000€ à 8000€ que l'état offre pour le recrutement d'un apprenti. Un apprenti vous coûterait de 0€ à 175€ 
                        selon son âge par mois la première année.

                    </p>
                </div>
            </div>

            
            <div className='section-body'>
               <div className='skill-section'>
                <h3>Compétences</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS <span>Flexbox/Bootstrap</span></li>
                    <li>JavaScript <span>Es6+/Jquery</span></li>
                    <li>React <span>React-bootstrap</span></li>
                    <li>Node Js <span>Express</span></li> 
                    <li>PHP</li>
                    <li>Java</li>
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
