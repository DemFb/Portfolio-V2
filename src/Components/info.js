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
                        Bienvenue sur mon site,
                        <br/>
                        <br/>
        
                        Je suis étudiant en BTS Développement Informatique en alternance à la Coding Factory. Je suis disponible dès maintenant avec un rythme d'une semaine en entreprise, d'une semaine à l'école et à temps plein au mois de mars.

        
                        <br/>
                        <br/>
        
                        Le fait de me recruter en apprentissage vous permettrai d’avoir au sein de votre équipe un apprenti motivé, qui apprend vite, prêt à relever les challenges et développer des fonctionnalités. 
                           
                        <br/> 
                        <br/>
      
                        Grâce à l’aide de 8000€ donnée par l'État, je ne vous couterai que 175 euros par mois la première année, ce qui vous permet d’avoir une personne passionnée qui prendra en expérience, en compétence à moindre coût dans votre équipe.

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
