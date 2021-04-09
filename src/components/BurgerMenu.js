import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { changeLangToEnglish, changeLangToSpanish, openMenu, closeMenu } from '../actions';
import BurgerMenuButton from './BurgerMenuButton';
import BurgerMenuCloseButton from './BurgerMenuCloseButton';
import DownloadResumeButton from './DownloadResumeButton';

const BurgerMenu = props => {
    const handleOpenMenu = () => props.openMenu();
    const handleCloseMenu = () => props.closeMenu();
    const handleChangeLangToEnglish = () => props.changeLangToEnglish();
    const handleChangeLangToSpanish = () => props.changeLangToSpanish();
    if (!props.showingMenu) {
        return (
            <React.Fragment>
                <BurgerMenuButton handleOpenMenu={handleOpenMenu} />
                <DownloadResumeButton />
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <div className="burger_menu" id="burger_menu">
                <span>Change language</span>
                <div className="burger_menu__lang_btn">
                    {props.language === 'English' ? (
                        <button onClick={handleChangeLangToEnglish} className="lang_selected">ENG</button>
                    ) : (
                        <button onClick={handleChangeLangToEnglish}>ENG</button>
                    )}
                    {props.language === 'Spanish' ? (
                        <button onClick={handleChangeLangToSpanish} className="lang_selected">SPA</button>
                    ) : (
                        <button onClick={handleChangeLangToSpanish}>SPA</button>
                    )}
                </div>
                <h2>Menu</h2>
                <ul>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/about">About me</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <h3>Find me on</h3>
                <ul>
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/federicotllorente">GitHub</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/federicotllorente/">Instagram</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/federicotllorente/">LinkedIn</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.behance.net/federicollorente">Behance</a></li>
                </ul>
                <p>Copyright Federico Tejedor Llorente &copy; 2021<br />All rights reserved</p>
                <BurgerMenuCloseButton handleCloseMenu={handleCloseMenu} />
            </div>
            <DownloadResumeButton />
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        showingMenu: state.showingMenu,
        language: state.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLangToEnglish: () => dispatch(changeLangToEnglish()),
        changeLangToSpanish: () => dispatch(changeLangToSpanish()),
        openMenu: () => dispatch(openMenu()),
        closeMenu: () => dispatch(closeMenu())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);