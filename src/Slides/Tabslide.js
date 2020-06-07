import React from 'react';
import {Slide} from 'react-slideshow-image';
import '../App.css';
import tab1 from './images/tab1.jpg'
import tab2 from './images/tab2.jpg'



const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}


  const Tabslide = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={tab1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={tab2} alt="img2" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Tabslide;
