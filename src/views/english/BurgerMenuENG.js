import React from 'react';
import { Link } from 'react-router-dom';

import BurgerMenuCloseButton from '../../components/BurgerMenuCloseButton';
import DownloadResumeButton from '../../components/DownloadResumeButton';

const BurgerMenuENG = props => (
    <React.Fragment>
        <div className="burger_menu" id="burger_menu">
            <span>Change language</span>
            <div className="burger_menu__lang_btn">
                <button onClick={props.handleChangeLangToEnglish} className="lang_selected">ENG</button>
                <button onClick={props.handleChangeLangToSpanish}>SPA</button>
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
            <BurgerMenuCloseButton handleCloseMenu={props.handleCloseMenu} />
        </div>
        <DownloadResumeButton />
    </React.Fragment>
);

export default BurgerMenuENG;