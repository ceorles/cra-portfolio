import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Her from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LittleRootTown from './components/Audio';

function MAR() {
    return (
        <div className='lelagela'>
            <Navbar />
            <LittleRootTown />
            <Her />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default MAR;
