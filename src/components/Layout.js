import React from 'react';
import { useLocation } from 'react-router-dom';

import BurgerMenu from './BurgerMenu';
import Header from './Header';

function Layout(props) {
    let location = useLocation();
    return (
        <React.Fragment>
            <BurgerMenu />
            <div className="wrapper">
                {(location.pathname !== '/') && (
                    <Header />
                )}
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default Layout;