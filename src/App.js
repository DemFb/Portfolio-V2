import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Components/landingPage';
import Project from './Components/projects';
import About from './Components/info'; 
import FooterPage from './Components/footer';
import Carousel from './Components/carouselPage';


function App() {
  return (
    <div className="App">
      <LandingPage/>
      <Project id='projets'/>
      <About id='contact'/>
      <Carousel/>
      <FooterPage/>
    </div>
  );
}

export default App;
