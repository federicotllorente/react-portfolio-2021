import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useFetchData from '../hooks/useFetchData';
import Project from '../components/Project';
import NoMoreDataModal from '../components/NoMoreDataModal';

const currentHost = window.location.origin;
const api_projects = `${currentHost}/api/projects`;
const api_technologies = `${currentHost}/api/technologies`;

const useFetchFilters = () => {
    const [filters, setFilters] = useState([]);
    const [loadingFilters, setLoadingFilters] = useState(false);
    const [errorFilters, setErrorFilters] = useState(null);
    const fetchFilters = async api_url => {
        setLoadingFilters(true);
        const result = await fetch(api_url);
        const data = await result.json();
        try {
            setLoadingFilters(false);
            let newFilters = [];
            data.forEach(el => {
                const newFilter = {
                    id: el.id,
                    name: el.name,
                    selected: false
                };
                newFilters.push(newFilter);
            });
            setFilters(newFilters);
        } catch (error) {
            setLoadingFilters(false);
            setErrorFilters(error);
        }
    };
    return {
        filters,
        loadingFilters,
        errorFilters,
        fetchFilters
    };
};

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
    const {
        filters,
        loadingFilters,
        errorFilters,
        fetchFilters
    } = useFetchFilters();
    useEffect(() => {
        fetchData(api_projects, pag_url);
        fetchFilters(api_technologies);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    function handleSeeMoreProjects() {
        fetchNextData(api_projects, pag_url);
    }
    function handleCloseNoMoreDataModal() {
        setShowingNoMoreDataModal(false);
    }
    // If the data or the filters are loading
    if (loading || loadingFilters) (
        <div className="loader"></div>
    )
    // If there's no data
    if (Object.keys(data).length === 0 && !loading) (
        <div className="error">
            <h2>Sorry! But there's an error</h2>
            <p>We couldn't find any data. Please, try again later.</p>
            <Link to="/">Return to the Homepage</Link>
        </div>
    )
    // If there's an error fetching the filters
    if (errorFilters) (
        <div className="error">
            <h2>Sorry! But there's an error</h2>
            <p>We couldn't find what you're looking for. Please, try again later.</p>
            <Link to="/">Return to the Homepage</Link>
        </div>
    )
    // If it's successfully fetched the data
    return (
        <div className="portfolio_wrapper">
            <h1>Portfolio</h1>
            <p>Also, if you want to see all my projects, feel free to visit my <a target="_blank" rel="noreferrer" href="https://github.com/federicotllorente">GitHub</a> and check out the repositories there!</p>
            <div className="portfolio_wrapper__filters">
                <h3>Filters</h3>
                <p>Filter projects by the technologies used</p>
                <div>
                    {filters && filters.map(el => el.selected ? (
                        <button key={el.id} className="portfolio_wrapper__filters--selected">{el.name}</button>
                    ) : (
                        <button key={el.id}>{el.name}</button>
                    ))}
                </div>
            </div>
            <div className="project_wrapper">
                {data && data.map(el => {
                    return (
                        <Project key={el.id} data={el} />
                    );
                })}
            </div>
            {(!noMoreData) && (
                <div className="portfolio__see_more_button" onClick={handleSeeMoreProjects}>See more projects</div>
            )}
            {showingNoMoreDataModal && (
                <NoMoreDataModal handleCloseNoMoreDataModal={handleCloseNoMoreDataModal} />
            )}
        </div>
    );
}

export default Portfolio;