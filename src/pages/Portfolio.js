import React, { useState, useEffect } from 'react';

import Project from '../components/Project';
const api = 'http://localhost:3001/projects/';

// Getting the data
async function getData(api_url) {
    const result = await fetch(api_url);
    const data = await result.json();
    return data;
}

function Portfolio(props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const fetchData = async (api_url) => {
        setLoading(true);
        const response = await getData(api_url);
        try {
            setLoading(false);
            setData(response);
        } catch (err) {
            setLoading(false);
            setError(err);
        }
    };

    useEffect(() => {
        fetchData(api)
    }, []);

    return (
        <div className="wrapper__content">
            <h1>Portfolio</h1>
            <p>Also, if you want to see all my projects, feel free to visit my <a href="https://github.com/federicotllorente">GitHub</a> and <a href="https://www.behance.net/federicollorente">Behance</a> profiles!</p>
            <div className="project_wrapper">
                {data && data.map(el => {
                    return (
                        <Project data={el} key={el.id} />
                    );
                })}
            </div>
        </div>
    );
}

export default Portfolio;