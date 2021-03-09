import React from 'react';
import { Link } from 'react-router-dom';

import projectImage from '../img/portfolio_project_photo.png';

function Project(props) {
    return (
        <div className="project">
            <div className="project__image">
                <Link to="#">
                    <img src={projectImage} alt="Project Thumbnail" />
                </Link>
            </div>
            <div className="project__content">
                <h2><Link to="#">Flashcards App</Link></h2>
                <p className="project__content__description">Web App – 2021</p>
                <div className="project__content__technologies">
                    <h3>Technologies used</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>Pug / HTML</li>
                        <li>Sass / CSS</li>
                    </ul>
                </div>
                <div className="project__content__ux">
                    <h3>UX Designed with</h3>
                    <ul>
                        <li>Adobe XD</li>
                    </ul>
                </div>
                <Link to="#">See entire project</Link><br /><Link to="#">See code in GitHub</Link>
            </div>
        </div>
    );
}

export default Project;