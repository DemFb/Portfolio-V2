import React from 'react';
import {Slide} from 'react-slideshow-image';
import '../App.css';
import anim1 from './images/anim1.jpg'
import anim2 from './images/anim2.jpg'



const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}


  const Animslide = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={anim1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={anim2} alt="img2" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Animslide;
