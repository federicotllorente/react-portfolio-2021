import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import useFetchData from '../hooks/useFetchData';
import useFetchFilters from '../hooks/useFetchFilters';
import useFetchNewData from '../hooks/useFetchNewData';

import PortfolioENG from '../views/english/PortfolioENG';
import PortfolioSPA from '../views/spanish/PortfolioSPA';

import { NoDataError, FetchingFiltersError } from '../components/ErrorMessages';

const currentHost = window.location.origin;
const api_projects = `${currentHost}/api/projects`;
const api_technologies = `${currentHost}/api/technologies`;

const Portfolio = props => {
    const {
        loading, data, noMoreData,
        showingNoMoreDataModal, setShowingNoMoreDataModal,
        fetchData, fetchNextData, pag_url
    } = useFetchData();
    const {
        filters, setFilters, loadingFilters, errorFilters,
        fetchFilters
    } = useFetchFilters();
    const {
        newData, loadingNewData,
        errorNewData, filtersSelected,
        handleSelectFilter, handleDeselectFilter
    } = useFetchNewData(api_projects, filters, setFilters);
    useEffect(() => {
        fetchData(api_projects, pag_url);
        fetchFilters(api_technologies);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const handleSeeMoreProjects = () => fetchNextData(api_projects, pag_url);
    const handleCloseNoMoreDataModal = () => setShowingNoMoreDataModal(false);
    // If the data or the filters are loading
    if (loading || loadingFilters || loadingNewData) (<div className="loader"></div>);
    // If there's no data
    if (data.body?.length == 0 && !loading) (<NoDataError language={props.language} />)
    // If there's an error fetching the filters or the filtered data
    if (errorFilters || errorNewData) (<FetchingFiltersError language={props.language} />)
    if (props.language === 'Spanish') {
        return (
            <PortfolioSPA
                language={props.language} filters={filters} filtersSelected={filtersSelected}
                handleDeselectFilter={handleDeselectFilter}
                handleSelectFilter={handleSelectFilter}
                data={data} newData={newData} loadingNewData={loadingNewData}
                noMoreData={noMoreData} showingNoMoreDataModal={showingNoMoreDataModal}
                handleSeeMoreProjects={handleSeeMoreProjects}
                handleCloseNoMoreDataModal={handleCloseNoMoreDataModal}
            />
        );
    }
    return (
        <PortfolioENG
            language={props.language} filters={filters} filtersSelected={filtersSelected}
            handleDeselectFilter={handleDeselectFilter}
            handleSelectFilter={handleSelectFilter}
            data={data} newData={newData} loadingNewData={loadingNewData}
            noMoreData={noMoreData} showingNoMoreDataModal={showingNoMoreDataModal}
            handleSeeMoreProjects={handleSeeMoreProjects}
            handleCloseNoMoreDataModal={handleCloseNoMoreDataModal}
        />
    );
};

const mapStateToProps = state => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps, null)(Portfolio);