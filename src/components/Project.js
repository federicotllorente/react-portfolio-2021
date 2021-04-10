import React, { useState } from 'react';

import ProjectENG from '../views/english/ProjectENG';
import ProjectSPA from '../views/spanish/ProjectSPA';

const Project = props => {
    // Limit technologies list items to show
    let technologiesNewArray = [];
    const maxTechsToShow = 4;
    for (let i = 0; i <= (maxTechsToShow - 1); i++) {
        const el = props.data.technologies[i];
        technologiesNewArray.push(el);
    }
    // Show availability note
    const [showingNote, setShowingNote] = useState(false);
    if (props.language === 'Spanish') {
        return (
            <ProjectSPA
                data={props.data}
                showingNote={showingNote}
                setShowingNote={setShowingNote}
                technologiesNewArray={technologiesNewArray}
            />
        );
    }
    return (
        <ProjectENG
            data={props.data}
            showingNote={showingNote}
            setShowingNote={setShowingNote}
            technologiesNewArray={technologiesNewArray}
        />
    );
};

export default Project;