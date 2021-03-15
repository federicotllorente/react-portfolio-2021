import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useFetchData from '../hooks/useFetchData';
import Project from '../components/Project';
import NoMoreDataModal from '../components/NoMoreDataModal';

const api_url = 'http://localhost:3001/projects';

function Portfolio(props) {
    const {
        loading,
        data,
        noMoreData,
        showingNoMoreDataModal,
        setShowingNoMoreDataModal,
        fetchData,
        fetchNextData,
        pag_url
    } = useFetchData();
    useEffect(() => {
        fetchData(api_url, pag_url);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
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
            <p>Also, if you want to see all my projects, feel free to visit my <a target="_blank" rel="noreferrer" href="https://github.com/federicotllorente">GitHub</a> and <a target="_blank" rel="noreferrer" href="https://www.behance.net/federicollorente">Behance</a> profiles!</p>
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
                <NoMoreDataModal handleCloseNoMoreDataModal={handleCloseNoMoreDataModal} />
            )}
        </div>
    );
}

export default Portfolio;