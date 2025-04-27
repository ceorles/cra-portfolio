import React, { useState, useEffect } from 'react';
import './components-css/Home.css';
import { Particles } from 'react-tsparticles';

// YOU MUST BE WONDERING WHY THE VARIABLE NAME IS "Her" WELL, IT'S BECAUSE THIS IS HOME SECTION AND SHE'S MY HOME.
const Her = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true); 
    }, []);

    return (
        <section id="home" className="home-section">
            <Particles
                id="tsparticles"
                options={{
                particles: {
                    number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                    },
                    shape: {
                    type: "circle",
                    },
                    opacity: {
                    value: 0.5,
                    random: true,
                    },
                    size: {
                    value: 3,
                    random: true,
                    },
                    move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    out_mode: "out",
                    },
                },
                interactivity: {
                    detect_on: "window",
                    events: {
                    onhover: {
                        enable: true,
                        mode: "repulse", 
                    },
                    onclick: {
                        enable: true,
                        mode: "push",
                    },
                    },
                },
                }}
            />
            <h1 className={animate ? 'animate-text' : ''}>
                WELCOME<br />TO<br />MY PORTFOLIO
            </h1>
        </section>
    );
};

export default Her;