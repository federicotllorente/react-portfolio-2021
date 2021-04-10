import React from 'react';
import { Link } from 'react-router-dom';

import BurgerMenuCloseButton from '../../components/BurgerMenuCloseButton';
import DownloadResumeButton from '../../components/DownloadResumeButton';

const BurgerMenuSPA = props => (
    <React.Fragment>
        <div className="burger_menu" id="burger_menu">
            <span>Cambiar idioma</span>
            <div className="burger_menu__lang_btn">
                <button onClick={props.handleChangeLangToEnglish}>ING</button>
                <button onClick={props.handleChangeLangToSpanish} className="lang_selected">ESP</button>
            </div>
            <h2>Menú</h2>
            <ul>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/about">Sobre mí</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
            <h3>Encuéntrame en</h3>
            <ul>
                <li><a target="_blank" rel="noreferrer" href="https://github.com/federicotllorente">GitHub</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/federicotllorente/">Instagram</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/federicotllorente/">LinkedIn</a></li>
            </ul>
            <p>Copyright Federico Tejedor Llorente &copy; 2021<br />Todos los derechos reservados</p>
            <BurgerMenuCloseButton handleCloseMenu={props.handleCloseMenu} />
        </div>
        <DownloadResumeButton />
    </React.Fragment>
);

export default BurgerMenuSPA;