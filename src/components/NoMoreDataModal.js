import React from 'react';

function NoMoreDataModal(props) {
    return (
        <div className="no_more_data_modal">
            <div className="no_more_data_modal__close_btn" onClick={props.handleCloseNoMoreDataModal}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.121 22.121">
                    <defs></defs>
                    <g id="Close_Menu_BTN" data-name="Close Menu BTN" transform="translate(-1743.439 -761.439)">
                        <path className="cls-1" id="Line_4" data-name="Line 4" transform="translate(1744.5 762.5)" d="M0 0l20 20"></path>
                        <path className="cls-1" id="Line_5" data-name="Line 5" transform="translate(1744.5 762.5)" d="M20 0L0 20"></path>
                    </g>
                </svg>
            </div>
            <div className="no_more_data_modal__text">
                <p>Sorry, but there's no more projects to show.</p>
            </div>
        </div>
    );
}

export default NoMoreDataModal;