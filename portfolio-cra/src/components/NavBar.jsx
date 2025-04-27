import React from 'react';
import './components-css/NavBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="#home">ceorles</a>
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contacts</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
