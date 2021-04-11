import React from 'react';
import { connect } from 'react-redux';

import ContactENG from '../views/english/ContactENG';
import ContactSPA from '../views/spanish/ContactSPA';

const Contact = props => {
    if (props.language === 'Spanish') return (<ContactSPA />);
    return (<ContactENG />);
};

const mapStateToProps = state => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps, null)(Contact);