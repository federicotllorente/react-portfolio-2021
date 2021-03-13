import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="not_found_wrapper">
            <h1>Error 404</h1>
            <p>The page was not found. Please, try with another one.</p>
            <Link to="/">Return to the Homepage</Link>
        </div>
    );
}