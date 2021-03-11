import React from 'react';

function BurgerMenuCloseButton(props) {
    return (
        <div className="burger_menu__close_btn" id="burger_menu__close_btn" onClick={e => props.handleCloseMenu()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.121 22.121">
                <defs></defs>
                <g id="Close_Menu_BTN" data-name="Close Menu BTN" transform="translate(-1743.439 -761.439)">
                    <path className="cls-1" id="Line_4" data-name="Line 4" transform="translate(1744.5 762.5)" d="M0 0l20 20"></path>
                    <path className="cls-1" id="Line_5" data-name="Line 5" transform="translate(1744.5 762.5)" d="M20 0L0 20"></path>
                </g>
            </svg>
        </div>
    );
}

export default BurgerMenuCloseButton;