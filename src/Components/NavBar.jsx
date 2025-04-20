import './NavBar.css';
import React from 'react';
import {motion} from 'framer-motion';

function NavBar(){

    return(

        <>
            <div className="nav-container">
                <nav className="nav-bar ">
                    <ul className="nav-list">
                        <li className="nav-item Home" ><a href="#home">Home</a></li>
                        <li className="nav-item AboutMe "><a href="#about-me">About Me</a></li>
                        <li className="nav-item Projects"><a href="#projects">Projects</a></li>
                        <li className="nav-item Contact"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>

    )

}

export default NavBar;