import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const DownloadResumeButton = props => {
    const buttonText = {
        withoutLineBreak: props.language === 'Spanish' ? 'Descarga mi CV' : 'Download my Resume/CV',
        withLineBreak: props.language === 'Spanish' ? 'Descarga mi CV' : 'Download my\nResume/CV'
    };
    const [buttonInnerHTML, setButtonInnerHTML] = useState(buttonText.withoutLineBreak);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', e => {
            setWindowWidth(window.innerWidth);
        });
        if (windowWidth <= 400) {
            setButtonInnerHTML(buttonText.withLineBreak);
        } else {
            setButtonInnerHTML(buttonText.withoutLineBreak);
        }
    }, [windowWidth]);
    return (
        <Link className="download_resume_btn" to="/" id="download_resume_btn">
            {buttonInnerHTML}
        </Link>
    );
};

const mapStateToProps = state => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps, null)(DownloadResumeButton);