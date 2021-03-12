import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Project from '../components/Project';

import api from '../api';
const api_url = 'http://localhost:3001/projects/';

function Portfolio(props) {
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const fetchData = async (api_url) => {
        const response = await api(api_url);
        try {
            setLoading(false);
            setData(response);
        } catch (err) {
            setLoading(false);
            // setError(err);
        }
    };

    useEffect(() => {
        fetchData(api_url);
    }, []);

    // If the data is loading
    if (loading) {
        return (
            <div className="loader"></div>
        );
    }
    // If there's no data
    if (Object.keys(data).length === 0 && !loading) {
        return (
            <div className="error">
                <h2>Sorry! But there's an error</h2>
                <p>We couldn't find any data. Please, try again later.</p>
                <Link to="/">Return to the Homepage</Link>
            </div>
        );
    }
    // If it's successfully fetched the data
    return (
        <div className="portfolio_wrapper">
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