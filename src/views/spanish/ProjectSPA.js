import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSPA = props => {
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
                    {props.data.typeSPA} – {props.data.year}
                </p>
                <div className="project__content__technologies">
                    <h3>Tecnologías utilizadas</h3>
                    <ul>
                        {props.data.technologies && technologiesNewArray.map(el => {
                            return (
                                <li key={el._id}>{el.name}</li>
                            );
                        })}
                    </ul>
                </div>
                <div className="project__content__ux">
                    <h3>UX diseñado con</h3>
                    <ul>
                        <li>{props.data.ux}</li>
                    </ul>
                </div>
                {props.data.available ? (
                    <React.Fragment>
                        <a href={props.data.url} target="_blank" rel="noreferrer">Ver proyecto completo</a>
                        <br />
                        <a href={props.data.gitHub} target="_blank" rel="noreferrer">Ver código en GitHub</a>
                    </React.Fragment>
                ) : (
                    <div className="notAvailable">
                        <a href={props.data.gitHub} target="_blank" rel="noreferrer">Ver código en GitHub</a>
                        <br />
                        <div>
                            {showingNote && (
                                <span className="notAvailable__note"><p><span>Nota: </span> Este proyecto actualmente está en desarrollo, y no se le ha hecho deploy aún. Pero si quieres, puedes ver el código en su repositorio en GitHub (haz click en "Ver código en GitHub")</p></span>
                            )}
                            <p
                                onMouseOver={e => setShowingNote(true)}
                                onMouseLeave={e => setShowingNote(false)}
                            >¿Dónde puedo ver este proyecto?</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectSPA;