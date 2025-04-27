import React from 'react';
import './components-css/Projects.css';

const Projects = () => (
    <section id="projects" className="projects-section">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project-card">
                <img src="KOI.png" alt="KOI WEBSITE" />
                <a href="https://ceorles.github.io/midterm_project.github.io/" target="_blank" rel="noopener noreferrer">
                    Visit Website
                </a>
            </div>

            <div className="project-card">
                <img src="mp3.png" alt="MUSIC PLAYER" />
                <a href="https://ceorles.github.io/music_player.github.io/" target="_blank" rel="noopener noreferrer">
                    Visit Website
                </a>
            </div>

            <div className="project-card">
                <img src="pokemon.png" alt="POKEMON" />
                <a href="https://ceorles.github.io/responsive_website.github.io/" target="_blank" rel="noopener noreferrer">
                    Visit Website
                </a>
            </div>

            <div className="project-card">
                <img src="card.png" alt="CARD" />
                <a href="https://ceorles.github.io/responsive_cards.github.io/" target="_blank" rel="noopener noreferrer">
                    Visit Website
                </a>
            </div>

            <div className="project-card">
                <img src="enrollment.png" alt="EFORM" />
                <a href="https://ceorles.github.io/enrollment_form.github.io/" target="_blank" rel="noopener noreferrer">
                    Visit Website
                </a>
            </div>
        </div>

        <p className="github-link">
            I have some ongoing projects that you can check out on my GitHub account: <a href="https://github.com/ceorles" target="_blank" rel="noopener noreferrer"><img src="github.png" alt="GITHUB" /> ceorles</a>
        </p>
    </section>
);

export default Projects;
