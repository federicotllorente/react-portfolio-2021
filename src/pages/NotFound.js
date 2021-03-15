import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
    const currentLoc = useLocation();
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
}