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
    if (props.language === 'Spanish') {
        return (
            <a className="download_resume_btn" target="_blank" rel="noreferrer" href="https://www.dropbox.com/s/9799f9x32960ath/Federico%20Tejedor%20Llorente%20%E2%80%93%20CV%20%28Espa%C3%B1ol%29.pdf?dl=0" id="download_resume_btn">
                {buttonInnerHTML}
            </a>
        );
    }
    return (
        <a className="download_resume_btn" target="_blank" rel="noreferrer" href="https://www.dropbox.com/s/vbixdcz1mv38bou/Federico%20Tejedor%20Llorente%20%E2%80%93%20Resume%3ACV%20%28English%29.pdf?dl=0" id="download_resume_btn">
            {buttonInnerHTML}
        </a>
    );
};

const mapStateToProps = state => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps, null)(DownloadResumeButton);