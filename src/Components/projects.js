import React, {useState} from 'react'
import '../App.css';
import ModalBike from '../modals/bikeShopModal';
import ModalTodo from '../modals/TodoModal';
import ModalSnake from '../modals/snakeModal';
import ModalSpeech from '../modals/speechModal';
import ModalMarkdown from '../modals/markdownModal';
import ModalTab from '../modals/tabModal';
import ModalAnim from '../modals/animModal';
import ModalFolio from '../modals/folioModal';
import ModalNavbar from '../modals/navbarModal';



function Project () {
    const [bikeShow, bikeModalShow] = useState(false);
    const [todoShow, setTodoShow] = useState(false);
    const [snakeShow, setSnakeShow] = useState(false);
    const [speechShow, setSpeechShow] = useState(false);
    const [markdownShow, setMarkdownShow] = useState(false);
    const [tabShow, setTabShow] = useState(false);
    const [animShow, setAnimShow] = useState(false);
    const [folioShow, setFolioShow] = useState(false);
    const [navbarShow, setNavbarShow] = useState(false);

    

        return (
            <div className="project" id='projets'>   
                   <h2> Mes projets </h2>
                    <hr/>  
                <div className="card-liste">     
                    <div className="card-corps">
                        <img variant="top" src="./images/bike1.png" alt="" />
                            <div className="card-content">
                                <div className="card-text">
                                    <p onClick={() => bikeModalShow(true)}>
                                        Bike Shop
                                    </p> 
                                </div>
                            </div>
                            <ModalBike
                                show={bikeShow}
                                onHide={() => bikeModalShow(false)}
                            />
                    </div>

                    <div className="card-corps">
                        <img variant="top" src="./images/todo2.png" alt="" />
                            <div className="card-content">
                                <div className="card-text">
                                    <p onClick={() => setTodoShow(true)}>
                                        Todo-List
                                    </p> 
                                </div>
                            </div>
                            <ModalTodo
                                show={todoShow}
                                onHide={() => setTodoShow(false)}
                            />
                    </div>

                    <div className="card-corps">
                        <img variant="top" src="./images/snake1.png" alt="" />
                            <div className="card-content">
                                <div className="card-text">
                                    <p onClick={() => setSnakeShow(true)}>
                                        Snake
                                    </p> 
                                </div>
                            </div>
                            <ModalSnake
                                show={snakeShow}
                                onHide={() => setSnakeShow(false)}
                            />
                    </div>

                    <div className="card-corps">
                        <img variant="top" src="./images/anim1.png" alt="" />
                            <div className="card-content">
                                <div className="card-text">
                                    <p onClick={() => setAnimShow(true)}>
                                        Bike Animation 
                                    </p> 
                                </div>
                            </div>
                            <ModalAnim
                                show={animShow}
                                onHide={() => setAnimShow(false)}
                            />
                    </div>

                    <div className="card-corps">
                        <img variant="top" src="./images/folio1.png" alt="" />
                            <div className="card-content">
                                <div className="card-text">
                                    <p onClick={() => setFolioShow(true)}>
                                        Portfolio v.1
                                    </p> 
                                </div>
                            </div>
                            <ModalFolio
                                show={folioShow}
                                onHide={() => setFolioShow(false)}
                            />
                    </div>

                    <div className="card-corps">
                        <img variant="top" src="./images/navbar1.png" alt="" />
                            <div className="card-content">
                                <div className="card-text">
                                    <p onClick={() => setNavbarShow(true)}>
                                        Nav-Bar
                                    </p> 
                                </div>
                            </div>
                            <ModalNavbar
                                show={navbarShow}
                                onHide={() => setNavbarShow(false)}
                            />
                    </div>

                    <div className="card-corps">
                        <img variant="top" src="./images/tab1.png" alt="" />
                            <div className="card-content">
                                <div className="card-text">
                                    <p onClick={() => setTabShow(true)}>
                                        Tap Music
                                    </p> 
                                </div>
                            </div>
                            <ModalTab
                                show={tabShow}
                                onHide={() => setTabShow(false)}
                            />
                    </div>

                    <div className="card-corps">
                        <img variant="top" src="./images/speech1.png" alt="" />
                            <div className="card-content">
                                <div className="card-text">
                                    <p onClick={() => setSpeechShow(true)}>
                                        Speech
                                    </p> 
                                </div>
                            </div>
                            <ModalSpeech
                                show={speechShow}
                                onHide={() => setSpeechShow(false)}
                            />
                    </div>

                    <div className="card-corps">
                        <img variant="top" src="./images/markdown1.png" alt="" />
                            <div className="card-content">
                                <div className="card-text">
                                    <p onClick={() => setMarkdownShow(true)}>
                                        Markdown
                                    </p> 
                                </div>
                            </div>
                            <ModalMarkdown
                                show={markdownShow}
                                onHide={() => setMarkdownShow(false)}
                            />
                    </div>
                </div>
            </div>
        )
    
}
  

export default Project;