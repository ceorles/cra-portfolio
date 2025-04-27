import React from 'react';
import './components-css/Contact.css';

const Contact = () => (
    <div>
        <section id="contact" className="contact-section">
            <h1>Contacts</h1>
            <ul className="contact-icons">
                <li>
                    <a href="mailto:berchescharles@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="gmail.png" alt="GMAIL" />
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/9073775492" target="_blank" rel="noopener noreferrer">
                    <img src="whatsapp.png" alt="WHATSAPP" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/ceorles?igsh=bmpxbXlobzJwb3Vj" target="_blank" rel="noopener noreferrer">
                    <img src="instagram.png" alt="INSTAGRAM" />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/ceorles" target="_blank" rel="noopener noreferrer">
                    <img src="twitter.png" alt="X" />
                    </a>
                </li>
            </ul>
        </section>

        <section className="footer">
            <span><strong> &copy; 2025 | Programmed by ceorles</strong></span>
        </section>
    </div>
);

export default Contact;

