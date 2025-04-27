import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Her from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function MAR() {
    return (
        <div className='container'>
            <Navbar />
            <Her />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default MAR;
