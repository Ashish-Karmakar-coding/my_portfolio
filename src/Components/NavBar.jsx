import './NavBar.css';
import React from 'react';
import {motion} from 'framer-motion';

function NavBar(){

    return(

        <>
            <div className="nav-container">
                <nav className="nav-bar ">
                    <ul className="nav-list">
                        <li className="nav-item Home"><motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        ><a href="#home">Home</a></motion.div></li>
                        <li className="nav-item AboutMe "><motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        ><a href="#about-me">About Me</a></motion.div></li>
                        <li className="nav-item Projects"><motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}

                        ><a href="#projects">Projects</a></motion.div></li>
                        <li className="nav-item Contact"><motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                        ><a href="#contact">Contact</a></motion.div></li>
                    </ul>
                </nav>
            </div>
        </>

    )

}

export default NavBar;