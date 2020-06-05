import React from 'react';
import {Slide} from 'react-slideshow-image';
import '../App.css';
import snake1 from './images/snake1.png'
import snake2 from './images/snake2.png'
import snake3 from './images/snake3.png'


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}


  const Snakeslide = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={snake1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={snake2} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={snake3} alt="img3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Snakeslide;
