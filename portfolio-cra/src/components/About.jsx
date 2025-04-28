import React, { useState, useRef } from 'react';
import './components-css/About.css';

const pikaMessages = [
    { text: "Pi?", audio: "/Pi.mp3" },
    { text: "Pi-ka-chu?", audio: "/Pi-ka-chu.mp3" },
    { text: "Pi-ka", audio: "/Pi-ka.mp3" },
    { text: "Pikapi", audio: "/Pikapi.mp3" },
    { text: "PikaPika", audio: "/PikaPika.mp3" },
];

const About = () => {
    const [message, setMessage] = useState("");
    const audioRef = useRef(null);

    const handleHover = () => {
        const random = pikaMessages[Math.floor(Math.random() * pikaMessages.length)];
        setMessage(random.text);

        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.src = random.audio;
            audioRef.current.volume = 0.3;
            audioRef.current.play().catch(err => {
                console.log("Autoplay blocked until user interacts.");
            });
        }
    };

    const handleLeave = () => {
        setMessage("");
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return (
        <section id="about" className="about-section">
            <h1>About</h1>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Yo, I'm Charles Berches, an IT student from Dalubhasaan ng Lungsod ng Lucena.
                        I code not for fun, but for the grades. You see that dancing Pikachu?
                        It's cute, right??? Turn up your volume and try hovering over it.
                    </p>
                </div>
                <div className="about-image" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                    <img src="/dancing-pika.gif" alt="Dancing Pikachu" />
                    {message && <div className="speech-bubble">{message}</div>}
                </div>
            </div>

            <audio ref={audioRef} preload="auto" />
        </section>
    );
};

export default About;