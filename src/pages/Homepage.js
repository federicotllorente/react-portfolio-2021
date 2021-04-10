import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Homepage = props => {
    if (props.language === 'Spanish') {
        return (
            <div className="homepage">
                <header>
                    <ul>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/about">Sobre mí</Link></li>
                        <li><Link to="/contact">Contacto</Link></li>
                    </ul>
                </header>
                <div className="homepage__mainTitle">
                    <h2>Hola,<br />soy<br /><span>Federico</span></h2>
                </div>
                <div className="homepage__tagline">
                    <h1>Desarrollador Front-end</h1>
                </div>
            </div>
        );
    }
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
};

const mapStateToProps = state => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps, null)(Homepage);