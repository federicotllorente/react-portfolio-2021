import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetailsSPA = props => {
    const { data } = props;
    return (
        <div className="project_details">
            <h1>{data.body[0].name}</h1>
            <div className="project_details__main_image">
                <img src={data.body[0].images[0].url} alt={data.body[0].name} />
            </div>
            <div className="project_details__intro">
                <div className="project_details__intro__tech">
                    <h2>Ficha técnica</h2>
                    <p>Estas son las tecnologías que utilicé en este proyecto</p>
                    <ul>
                        {data.body[0].technologies.map(el => {
                            return (
                                <li key={el._id}>–{el.name}</li>
                            );
                        })}
                    </ul>
                    <h3>UX diseñado con</h3>
                    <p>{data.body[0].ux}</p>
                    <a href={data.body[0].url} target="_blank" rel="noreferrer">Ver proyecto completo</a>
                    <br />
                    <a href={data.body[0].gitHub} target="_blank" rel="noreferrer">Ver código en GitHub</a>
                </div>
                <div className="project_details__intro__description">
                    <h2>Sobre este proyecto</h2>
                    <p>{data.body[0].descriptionSPA}</p>
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
                <h2>¿Quieres contactarme?</h2>
                <p>¡Puedes ir a la <Link to="/contact">página de contacto</Link> para ponerte en contacto conmigo!<br />También, si quieres puedes <a href="mailto:hello@federicotllorente.work">enviarme un email</a>.</p>
            </div>
        </div>
    );
};

export default ProjectDetailsSPA;