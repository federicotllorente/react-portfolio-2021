import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function DownloadResumeButton() {
    const [buttonInnerHTML, setButtonInnerHTML] = useState('Download my Resume/CV');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', e => {
            setWindowWidth(window.innerWidth);
        });

        if (windowWidth <= 400) {
            setButtonInnerHTML('Download my\nResume/CV');
        } else {
            setButtonInnerHTML('Download my Resume/CV');
        }
    }, [windowWidth]);

    return (
        <Link className="download_resume_btn" to="/" id="download_resume_btn">
            {buttonInnerHTML}
        </Link>
    );
}

export default DownloadResumeButton;