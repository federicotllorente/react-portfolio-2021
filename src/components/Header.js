import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
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
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/about">About me</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </header>
        );
    }
}

export default Header;