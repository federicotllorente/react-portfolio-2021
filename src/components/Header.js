import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
    let location = useLocation();
    const headerItems = [
        { id: 1, name: 'Portfolio', path: '/portfolio' },
        { id: 2, name: 'About me', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' }
    ];
    return (
        <header>
            <div className="logo">
                <h2>
                    <Link to="/">
                        <span>Federico</span><br />Tejedor<br /><span>Llorente</span>
                    </Link>
                </h2>
                <h1>Front-end<br />Developer</h1>
            </div>
            <ul>
                {headerItems.map(el => {
                    return (
                        <li key={el.id}>
                            {(location.pathname === el.path) ? (
                                <Link className="currentPage" to={el.path}>{el.name}</Link>
                            ) : (
                                    <Link to={el.path}>{el.name}</Link>
                                )}
                        </li>
                    );
                })}
            </ul>
        </header>
    );
}

export default Header;