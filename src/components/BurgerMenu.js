import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BurgerMenu extends Component {
    openAndCloseBurgerMenu = () => {
        // let alreadyOpened = menuClassList.contains(showingClass);
        // if (!alreadyOpened) {
        //     menuClassList.add(showingClass);
        // } else {
        //     menuClassList.remove(showingClass);
        // }
    };
    render() {
        return (
            <React.Fragment>
                <div className="burger_menu_btn" id="burger_menu_btn" onClick={this.openAndCloseBurgerMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 23">
                        <defs></defs>
                        <g id="Group_2" data-name="Group 2" transform="translate(-1069.5 92)">
                            <path className="cls-1" id="Line_1" data-name="Line 1" transform="translate(1069.5 -90.5)" d="M0 0h30"></path>
                            <path className="cls-1" id="Line_2" data-name="Line 2" transform="translate(1069.5 -80.5)" d="M0 0h30"></path>
                            <path className="cls-1" id="Line_3" data-name="Line 3" transform="translate(1069.5 -70.5)" d="M0 0h30"></path>
                        </g>
                    </svg>
                </div>
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
                    <div className="burger_menu__close_btn" id="burger_menu__close_btn" onClick={this.openAndCloseBurgerMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.121 22.121">
                            <defs></defs>
                            <g id="Close_Menu_BTN" data-name="Close Menu BTN" transform="translate(-1743.439 -761.439)">
                                <path className="cls-1" id="Line_4" data-name="Line 4" transform="translate(1744.5 762.5)" d="M0 0l20 20"></path>
                                <path className="cls-1" id="Line_5" data-name="Line 5" transform="translate(1744.5 762.5)" d="M20 0L0 20"></path>
                            </g>
                        </svg>
                    </div>
                    {/* Change the link to download my Resume */}
                </div><Link className="download_resume_btn" to="/" id="download_resume_btn">Download my Resume/CV</Link>
            </React.Fragment>
        );
    }
}

export default BurgerMenu;