import React from 'react';
import {Slide} from 'react-slideshow-image';
import '../App.css';
import speech1 from './images/speech1.png'
import speech2 from './images/speech2.png'



const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}


  const Speechslide = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={speech1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={speech2} alt="img2" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Speechslide;
