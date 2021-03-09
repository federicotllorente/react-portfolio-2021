import React from 'react';

import Project from '../components/Project';

function Portfolio(props) {
    return (
        <div className="wrapper__content">
            <h1>Portfolio</h1>
            <p>Also, if you want to see all my projects, feel free to visit my <a href="https://github.com/federicotllorente">GitHub</a> and <a href="https://www.behance.net/federicollorente">Behance</a> profiles!</p>
            <div className="project_wrapper">
                <Project />
            </div>
        </div>
    );
}

export default Portfolio;