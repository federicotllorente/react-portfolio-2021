import React from 'react';
import { Link } from 'react-router-dom';

const ProjectENG = props => {
    const { showingNote, setShowingNote, technologiesNewArray } = props;
    return (
        <div className="project" key={props.data._id}>
            <div className="project__image">
                <Link to={`portfolio/${props.data.pathname}`}>
                    <img src={props.data.images[0].url} alt="Project Thumbnail" />
                </Link>
            </div>
            <div className="project__content">
                <h2>
                    <Link to={`portfolio/${props.data.pathname}`}>
                        {props.data.name}
                    </Link>
                </h2>
                <p className="project__content__description">
                    {props.data.typeENG} – {props.data.year}
                </p>
                <div className="project__content__technologies">
                    <h3>Technologies used</h3>
                    <ul>
                        {props.data.technologies && technologiesNewArray.map(el => {
                            return (
                                <li key={el._id}>{el.name}</li>
                            );
                        })}
                    </ul>
                </div>
                <div className="project__content__ux">
                    <h3>UX Designed with</h3>
                    <ul>
                        <li>{props.data.ux}</li>
                    </ul>
                </div>
                {props.data.available ? (
                    <React.Fragment>
                        <a href={props.data.url} target="_blank" rel="noreferrer">See entire project</a>
                        <br />
                        <a href={props.data.gitHub} target="_blank" rel="noreferrer">See code in GitHub</a>
                    </React.Fragment>
                ) : (
                    <div className="notAvailable">
                        <a href={props.data.gitHub} target="_blank" rel="noreferrer">See code in GitHub</a>
                        <br />
                        <div>
                            {showingNote && (
                                <span className="notAvailable__note"><p><span>Note: </span> This project is currently in development, and it's not deployed yet. But if you want, you can see the code in its GitHub repository (click on 'See code in GitHub')</p></span>
                            )}
                            <p
                                onMouseOver={e => setShowingNote(true)}
                                onMouseLeave={e => setShowingNote(false)}
                            >Where can I see this project?</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectENG;