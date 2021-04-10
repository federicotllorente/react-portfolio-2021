import React from 'react';
import { Link } from 'react-router-dom';

export const NoDataError = props => {
    if (props.language === 'Spanish') {
        return (
            <div className="error">
                <h2>¡Disculpas! Ha habido un error</h2>
                <p>No hemos podido encontrar ninguna información. Por favor, intenta de nuevo más tarde.</p>
                <Link to="/">Regresar a la página principal</Link>
            </div>
        );
    }
    return (
        <div className="error">
            <h2>Sorry! But there's an error</h2>
            <p>We couldn't find any data. Please, try again later.</p>
            <Link to="/">Return to the Homepage</Link>
        </div>
    );
}

export const FetchingFiltersError = props => {
    if (props.language === 'Spanish') {
        return (
            <div className="error">
                <h2>¡Disculpas! Ha habido un error</h2>
                <p>No hemos podido encontrar lo que estás buscando. Por favor, intenta de nuevo más tarde.</p>
                <Link to="/">Regresar a la página principal</Link>
            </div>
        );
    }
    return (
        <div className="error">
            <h2>Sorry! But there's an error</h2>
            <p>We couldn't find what you're looking for. Please, try again later.</p>
            <Link to="/">Return to the Homepage</Link>
        </div>
    );
}

export const NoProjectsError = props => {
    if (props.language === 'Spanish') {
        return (
            <div className="error">
                <h2>¡Parece que no hay ningún proyecto!</h2>
                <p>No pudimos encontrar ninguno con los filtros actuales. Por favor, intenta con otros.</p>
            </div>
        );
    }
    return (
        <div className="error">
            <h2>It seems that there's no projects!</h2>
            <p>We couldn't find any with the filters requested. Please, try again other ones.</p>
        </div>
    );
}