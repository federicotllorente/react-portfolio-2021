import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <header>
                    <ul>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/about">About me</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </header>
                <div className="homepage__mainTitle">
                    <h2>Hey,<br />I'm<br /><span>Federico</span></h2>
                </div>
                <div className="homepage__tagline">
                    <h1>Front-end Developer</h1>
                </div>
            </div>
        );
    }
}

export default Homepage;