import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetailsENG = props => {
    const { data } = props;
    return (
        <div className="project_details">
            <h1>{data.body[0].name}</h1>
            <div className="project_details__main_image">
                <img src={data.body[0].images[0].url} alt={data.body[0].name} />
            </div>
            <div className="project_details__intro">
                <div className="project_details__intro__tech">
                    <h2>Technical sheet</h2>
                    <p>These are the technologies I used in this project</p>
                    <ul>
                        {data.body[0].technologies.map(el => {
                            return (
                                <li key={el._id}>–{el.name}</li>
                            );
                        })}
                    </ul>
                    <h3>UX Designed with</h3>
                    <p>{data.body[0].ux}</p>
                    <a href={data.body[0].url} target="_blank" rel="noreferrer">See entire project</a>
                    <br />
                    <a href={data.body[0].gitHub} target="_blank" rel="noreferrer">See code in GitHub</a>
                </div>
                <div className="project_details__intro__description">
                    <h2>About this project</h2>
                    <p>{data.body[0].descriptionENG}</p>
                </div>
            </div>
            <div className="project_details__photos">
                {data.body[0].images.map(el => {
                    return (
                        <img key={el._id} src={el.url} alt={`${data.body[0].name} ${el._id}`} />
                    )
                })}
            </div>
            <div className="project_details__contact">
                <hr />
                <h2>Do you want to contact me?</h2>
                <p>You can go to the <Link to="/contact">contact page</Link> and get in touch with me!<br />Also, if you want you can <a href="mailto:hello@federicotllorente.work">send me an email</a>.</p>
            </div>
        </div>
    );
};

export default ProjectDetailsENG;