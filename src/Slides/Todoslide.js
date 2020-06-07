import React from 'react';
import {Slide} from 'react-slideshow-image';
import '../App.css';
import todo1 from './images/todo1.jpg'
import todo2 from './images/todo2.jpg'



const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}


  const Todoslide = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={todo1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={todo2} alt="img2" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Todoslide;
