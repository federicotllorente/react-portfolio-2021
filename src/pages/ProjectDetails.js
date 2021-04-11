import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import useFetchProjData from '../hooks/useFetchProjData';

import ProjectDetailsENG from '../views/english/ProjectDetailsENG';
import ProjectDetailsSPA from '../views/spanish/ProjectDetailsSPA';
import NotFound from './NotFound';

const currentHost = window.location.origin;
const api_url = `${currentHost}/api/projects`;

const ProjectDetails = props => {
    const {
        loading,
        data,
        pag_url,
        fetchData
    } = useFetchProjData();
    // Show availability note
    const [showingNote, setShowingNote] = useState(false);
    useEffect(() => {
        fetchData(api_url, pag_url);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    // If the app is fetching/loading
    if (loading) return (<div className="loader"></div>);
    // If it's successfully fetched the data
    if (data.body) {
        if (props.language === 'Spanish') return (
            <ProjectDetailsSPA data={data} showingNote={showingNote} setShowingNote={setShowingNote} />
        );
        return (<ProjectDetailsENG data={data} showingNote={showingNote} setShowingNote={setShowingNote} />);
    }
    // If the project wasn't found
    return (<NotFound />);
}

const mapStateToProps = state => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps, null)(ProjectDetails);