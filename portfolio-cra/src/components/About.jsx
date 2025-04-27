import React, { useState } from 'react';
import './components-css/About.css';

const pikaMessages = [
    "Pika Pikachu!",
    "Pi?",
    "Pi-ka",
    "Pi-ka-chu?",
    "Pikapi",
    "PikaPika",
    "Pikachu-Pi",
];

const About = () => {
    const [message, setMessage] = useState("");

    const handleHover = () => {
    const random = pikaMessages[Math.floor(Math.random() * pikaMessages.length)];
    setMessage(random);
    };

    const handleLeave = () => {
    setMessage("");
    };

    return (
        <section id="about" className="about-section">
            <h1>About</h1>
            <div className="about-content">
                <div className="about-text">
                    <p>
                    Yo, I'm Charles Berches, an IT student from Dalubhasaan ng Lungsod ng Lucena.
                    I code not for fun, but for the grades. You see that dancing Pikachu?
                    Cute, right? Try to hover it more than once.
                    </p>
                </div>
                <div
                    className="about-image"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                >
                    <img src="dancing-pika.gif" alt="Dancing Pikachu" />
                    {message && <div className="speech-bubble">{message}</div>}
                </div>
            </div>
        </section>
    );
};

export default About;
