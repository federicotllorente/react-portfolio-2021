import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Project from '../components/Project';

import api from '../api';
const api_url = 'http://localhost:3001/projects';

function Portfolio(props) {

    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [noMoreData, setNoMoreData] = useState(false);
    const [showingNoMoreDataModal, setShowingNoMoreDataModal] = useState(false);

    const pag_url = `?_page=${currentPage}&_limit=3`;

    const fetchData = async (api_url, endpoint) => {
        const final_url = api_url + endpoint;
        const response = await api(final_url);
        try {
            setLoading(false);
            setCurrentPage(currentPage + 1);
            setData(response);
        } catch (err) {
            setLoading(false);
            // setError(err);
        }
    };
    const fetchNextData = async (api_url, endpoint) => {
        const final_url = api_url + endpoint;
        const response = await api(final_url);
        try {
            setLoading(false);
            if (response.length === 0) {
                setNoMoreData(true);
                setShowingNoMoreDataModal(true);
            } else if (response.length < 3) {
                setNoMoreData(true);
                setCurrentPage(currentPage + 1);
                const newResponse = [...data, response];
                setData(newResponse.flat());
            } else {
                setCurrentPage(currentPage + 1);
                const newResponse = [...data, response];
                setData(newResponse.flat());
            }
        } catch (err) {
            setLoading(false);
            // setError(err);
        }
    };

    useEffect(() => {
        fetchData(api_url, pag_url);
    }, []);

    function handleSeeMoreProjects() {
        fetchNextData(api_url, pag_url);
    }
    function handleCloseNoMoreDataModal() {
        setShowingNoMoreDataModal(false);
    }

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
            {(!noMoreData) && (
                <div className="portfolio__see_more_button" onClick={handleSeeMoreProjects}>See more projects</div>
            )}
            {(showingNoMoreDataModal) && (
                <div className="no_more_data_modal">
                    <div className="no_more_data_modal__close_btn" onClick={handleCloseNoMoreDataModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.121 22.121">
                            <defs></defs>
                            <g id="Close_Menu_BTN" data-name="Close Menu BTN" transform="translate(-1743.439 -761.439)">
                                <path className="cls-1" id="Line_4" data-name="Line 4" transform="translate(1744.5 762.5)" d="M0 0l20 20"></path>
                                <path className="cls-1" id="Line_5" data-name="Line 5" transform="translate(1744.5 762.5)" d="M20 0L0 20"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="no_more_data_modal__text">
                        <p>Sorry, but there's no more projects to show.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Portfolio;