import React from 'react';

function BurgerMenuButton(props) {
    return (
        <div className="burger_menu_btn" id="burger_menu_btn" onClick={e => props.handleOpenMenu()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 23">
                <defs></defs>
                <g id="Group_2" data-name="Group 2" transform="translate(-1069.5 92)">
                    <path className="cls-1" id="Line_1" data-name="Line 1" transform="translate(1069.5 -90.5)" d="M0 0h30"></path>
                    <path className="cls-1" id="Line_2" data-name="Line 2" transform="translate(1069.5 -80.5)" d="M0 0h30"></path>
                    <path className="cls-1" id="Line_3" data-name="Line 3" transform="translate(1069.5 -70.5)" d="M0 0h30"></path>
                </g>
            </svg>
        </div>
    );
}

export default BurgerMenuButton;