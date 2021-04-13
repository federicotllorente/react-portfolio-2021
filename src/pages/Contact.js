import React from 'react';
import { connect } from 'react-redux';

import useSendMessage from '../hooks/useSendMessage';

import ContactENG from '../views/english/ContactENG';
import ContactSPA from '../views/spanish/ContactSPA';

const Contact = props => {
    const {
        name, email, message,
        handleChange, handleSubmit
    } = useSendMessage();
    if (props.language === 'Spanish') return (
        <ContactSPA
            name={name} email={email} message={message}
            handleChange={handleChange} handleSubmit={handleSubmit}
        />
    );
    return (
        <ContactENG
            name={name} email={email} message={message}
            handleChange={handleChange} handleSubmit={handleSubmit}
        />
    );
};

const mapStateToProps = state => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps, null)(Contact);