import React from 'react';

import BurgerMenu from './BurgerMenu';
import Header from './Header';

function Layout(props) {
    return (
        <React.Fragment>
            <BurgerMenu />
            <div className="wrapper">
                {(window.location.pathname !== '/') && (
                    <Header />
                )}
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default Layout;