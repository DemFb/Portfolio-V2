import React from 'react';
import {Slide} from 'react-slideshow-image';
import '../App.css';
import folio1 from './images/folio1.png'
import folio2 from './images/folio2.png'
import folio3 from './images/folio3.png'


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}


  const Folioslide = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={folio1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={folio2} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={folio3} alt="img3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Folioslide;
