import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import BurgerMenuButton from './BurgerMenuButton';
import BurgerMenuCloseButton from './BurgerMenuCloseButton';

function DownloadResumeButton() {
    return (<Link className="download_resume_btn" to="/" id="download_resume_btn">Download my Resume/CV</Link>);
}

function BurgerMenu() {
    const [showingMenu, setShowingMenu] = useState(false);
    const handleOpenMenu = () => {
        setShowingMenu(true);
    }
    const handleCloseMenu = () => {
        setShowingMenu(false);
    }
    if (!showingMenu) {
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
                <h2>Menu</h2>
                <ul>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/about">About me</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <h3>Find me on</h3>
                <ul>
                    <li><a href="https://github.com/federicotllorente">GitHub</a></li>
                    <li><a href="https://www.instagram.com/federicotllorente/">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/in/federicotllorente/">LinkedIn</a></li>
                    <li><a href="https://www.behance.net/federicollorente">Behance</a></li>
                </ul>
                <p>Copyright Federico Tejedor Llorente &copy; 2021<br />All rights reserved</p>
                <BurgerMenuCloseButton handleCloseMenu={handleCloseMenu} />
            </div>
            <DownloadResumeButton />
        </React.Fragment>
    );
}

export default BurgerMenu;