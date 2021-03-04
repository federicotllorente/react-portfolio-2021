import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <React.Fragment>
            <h1>Error 404</h1>
            <p>Not found</p>
            <Link to="/">Return to the Homepage</Link>
        </React.Fragment>
    );
}