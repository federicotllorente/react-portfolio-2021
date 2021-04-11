import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const NotFound = props => {
    const currentLoc = useLocation();
    if (props.language === 'Spanish') {
        return (
            <div className="not_found_wrapper">
                <h1>Error 404</h1>
                <p>La página no fue encontrada. Por favor, intenta de nuevo con otra.</p>
                {!currentLoc.pathname.includes('/portfolio/') ? (
                    <Link to="/">Regresar a la página principal</Link>
                ) : (
                    <Link to="/portfolio">Regresar al Portfolio</Link>
                )}
            </div>
        );
    }
    return (
        <div className="not_found_wrapper">
            <h1>Error 404</h1>
            <p>The page was not found. Please, try with another one.</p>
            {!currentLoc.pathname.includes('/portfolio/') ? (
                <Link to="/">Return to the Homepage</Link>
            ) : (
                <Link to="/portfolio">Return to the Portfolio</Link>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps, null)(NotFound);