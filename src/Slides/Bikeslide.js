import React from 'react';
import {Slide} from 'react-slideshow-image';
import '../App.css';
import bike1 from './images/bike1.jpg'
import bike2 from './images/bike2.jpg'
import bike3 from './images/bike3.jpg'


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}


  const Bikeslide = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={bike1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={bike2} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={bike3} alt="img3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Bikeslide;
