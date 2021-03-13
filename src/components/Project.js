import React from 'react';
import { Link } from 'react-router-dom';

function Project(props) {
    return (
        <div className="project" key={props.data.id}>
            <div className="project__image">
                <Link to={`portfolio/${props.data.pathname}`}>
                    <img src={props.data.image} alt="Project Thumbnail" />
                </Link>
            </div>
            <div className="project__content">
                <h2>
                    <Link to={`portfolio/${props.data.pathname}`}>
                        {props.data.name}
                    </Link>
                </h2>
                <p className="project__content__description">
                    {props.data.type} – {props.data.year}
                </p>
                <div className="project__content__technologies">
                    <h3>Technologies used</h3>
                    <ul>
                        {props.data.technologies && props.data.technologies.map(el => {
                            return (
                                <li key={el.id}>{el.name}</li>
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
                <a href={props.data.url}>See entire project</a>
                <br />
                <a href={props.data.gitHub}>See code in GitHub</a>
            </div>
        </div>
    );
}

export default Project;