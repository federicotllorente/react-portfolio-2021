import React from 'react';
import { Link } from 'react-router-dom';

export const NoDataError = () => (
    <div className="error">
        <h2>Sorry! But there's an error</h2>
        <p>We couldn't find any data. Please, try again later.</p>
        <Link to="/">Return to the Homepage</Link>
    </div>
);

export const FetchingFiltersError = () => (
    <div className="error">
        <h2>Sorry! But there's an error</h2>
        <p>We couldn't find what you're looking for. Please, try again later.</p>
        <Link to="/">Return to the Homepage</Link>
    </div>
);

export const NoProjectsError = () => (
    <div className="error">
        <h2>It seems that there's no projects!</h2>
        <p>We couldn't find any with the filters requested. Please, try again other ones.</p>
    </div>
);