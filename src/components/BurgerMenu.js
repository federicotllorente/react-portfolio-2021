import React from 'react';
import { connect } from 'react-redux';

import BurgerMenuENG from '../views/english/BurgerMenuENG';
import BurgerMenuSPA from '../views/spanish/BurgerMenuSPA';

import { changeLangToEnglish, changeLangToSpanish, openMenu, closeMenu } from '../actions';
import BurgerMenuButton from './BurgerMenuButton';
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
    if (props.language === 'Spanish') {
        return (
            <BurgerMenuSPA
                handleChangeLangToEnglish={handleChangeLangToEnglish}
                handleChangeLangToSpanish={handleChangeLangToSpanish}
                handleCloseMenu={handleCloseMenu}
            />
        );
    }
    return (
        <BurgerMenuENG
            handleChangeLangToEnglish={handleChangeLangToEnglish}
            handleChangeLangToSpanish={handleChangeLangToSpanish}
            handleCloseMenu={handleCloseMenu}
        />
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