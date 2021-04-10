import React from 'react';
import { connect } from 'react-redux';

import AboutENG from '../views/english/AboutENG';
import AboutSPA from '../views/spanish/AboutSPA';

const About = props => {
    if (props.language === 'Spanish') return (<AboutSPA />);
    return (<AboutENG />);
};

const mapStateToProps = state => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps, null)(About);