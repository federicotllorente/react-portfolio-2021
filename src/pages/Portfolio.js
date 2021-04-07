import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useFetchData from '../hooks/useFetchData';
import useFetchFilters from '../hooks/useFetchFilters';
import useFetchNewData from '../hooks/useFetchNewData';
import Project from '../components/Project';
import NoMoreDataModal from '../components/NoMoreDataModal';

const currentHost = window.location.origin;
const api_projects = `${currentHost}/api/projects`;
const api_technologies = `${currentHost}/api/technologies`;

const Portfolio = () => {
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
        setFilters,
        loadingFilters,
        errorFilters,
        fetchFilters
    } = useFetchFilters();
    const {
        newData,
        loadingNewData,
        errorNewData,
        filtersSelected,
        handleSelectFilter,
        handleDeselectFilter
    } = useFetchNewData(api_projects, filters, setFilters);
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
    if (loading || loadingFilters || loadingNewData) (
        <div className="loader"></div>
    )
    // If there's no data
    if (data.body && data.body.length == 0 && !loading) (
        <div className="error">
            <h2>Sorry! But there's an error</h2>
            <p>We couldn't find any data. Please, try again later.</p>
            <Link to="/">Return to the Homepage</Link>
        </div>
    )
    // If there's an error fetching the filters or the filtered data
    if (errorFilters || errorNewData) (
        <div className="error">
            <h2>Sorry! But there's an error</h2>
            <p>We couldn't find what you're looking for. Please, try again later.</p>
            <Link to="/">Return to the Homepage</Link>
        </div>
    )
    return (
        <div className="portfolio_wrapper">
            <h1>Portfolio</h1>
            <p>Also, if you want to see all my projects, feel free to visit my <a target="_blank" rel="noreferrer" href="https://github.com/federicotllorente">GitHub</a> and check out the repositories there!</p>
            <div className="portfolio_wrapper__filters">
                <h3>Filters</h3>
                <p>Filter projects by the technologies used</p>
                <div>
                    {filters && filters.map(el => el.selected ? (
                        <button key={el.id} onClick={e => handleDeselectFilter(el.id)} className="selected">{el.name}</button>
                    ) : (
                        <button key={el.id} onClick={e => handleSelectFilter(el.id)}>{el.name}</button>
                    ))}
                </div>
            </div>
            <div className="project_wrapper">
                {(filtersSelected && filtersSelected.length == 0) && (
                    <React.Fragment>
                        {data.body && data.body.map(el => {
                            return (
                                <Project key={el._id} data={el} />
                            );
                        })}
                    </React.Fragment>
                )}
                {(filtersSelected && filtersSelected.length >= 1) && (
                    <React.Fragment>
                        {newData.body && newData.body.map(el => {
                            return (
                                <Project key={el._id} data={el} />
                            );
                        })}
                    </React.Fragment>
                )}
                {(newData.body && newData.body.length == 0 &&
                    filtersSelected && filtersSelected.length >= 1 && !loadingNewData) && (
                        <div className="error">
                            <h2>It seems that there's no projects!</h2>
                            <p>We couldn't find any with the filters requested. Please, try again other ones.</p>
                        </div>
                    )}
            </div>
            {((!noMoreData && data.body && data.body.length >= 3) ||
                (data.body && data.body.length !== 0 && data.body.length % 4 == 0) ||
                (newData.body && newData.body.length !== 0 && newData.body.length % 4 == 0)) && (
                    <div className="portfolio__see_more_button" onClick={handleSeeMoreProjects}>See more projects</div>
                )}
            {showingNoMoreDataModal && (
                <NoMoreDataModal handleCloseNoMoreDataModal={handleCloseNoMoreDataModal} />
            )}
        </div>
    );
};

export default Portfolio;