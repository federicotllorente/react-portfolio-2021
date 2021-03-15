import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useFetchProjData from '../hooks/useFetchProjData';
import NotFound from './NotFound';

const api_url = 'http://localhost:3001/projects';

function ProjectDetails() {
    const {
        loading,
        data,
        pag_url,
        fetchData
    } = useFetchProjData();
    useEffect(() => {
        fetchData(api_url, pag_url);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    // If the app is fetching/loading
    if (loading) {
        return (
            <div className="loader"></div>
        );
    }
    // If it's successfully fetched the data
    if (data[0]) {
        return (
            <div className="project_details">
                <h1>{data[0].name}</h1>
                <div className="project_details__main_image">
                    <img src={data[0].images[0].url} alt={data[0].name} />
                </div>
                <div className="project_details__intro">
                    <div className="project_details__intro__tech">
                        <h2>Technical sheet</h2>
                        <p>These are the technologies I used in this project</p>
                        <ul>
                            {data[0].technologies.map(el => {
                                return (
                                    <li key={el.id}>–{el.name}</li>
                                );
                            })}
                        </ul>
                        <h3>UX Designed with</h3>
                        <p>{data[0].ux}</p>
                        <a href={data[0].url} target="_blank" rel="noreferrer">See entire project</a>
                        <br />
                        <a href={data[0].gitHub} target="_blank" rel="noreferrer">See code in GitHub</a>
                    </div>
                    <div className="project_details__intro__description">
                        <h2>About this project</h2>
                        <p>{data[0].description}</p>
                    </div>
                </div>
                <div className="project_details__photos">
                    {data[0].images.map(el => {
                        return (
                            <img key={el.id} src={el.url} alt={`${data[0].name} ${el.id}`} />
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
    }
    // If the project wasn't found
    return (<NotFound />);
}

export default ProjectDetails;