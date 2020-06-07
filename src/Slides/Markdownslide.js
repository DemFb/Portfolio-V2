import React from 'react';
import {Slide} from 'react-slideshow-image';
import '../App.css';
import markdown1 from './images/markdown1.jpg'
import markdown2 from './images/markdown2.jpg'



const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}


  const Markdownslide = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={markdown1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={markdown2} alt="img2" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Markdownslide;
