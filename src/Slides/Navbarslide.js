import React from 'react';
import {Slide} from 'react-slideshow-image';
import '../App.css';
import navbar1 from './images/navbar1.jpg'
import navbar2 from './images/navbar2.jpg'
import navbar3 from './images/navbar3.jpg'


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}


  const Navbarslide = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={navbar1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={navbar2} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={navbar3} alt="img3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Navbarslide;
