import React from 'react';

const ContactENG = props => {
    return (
        <div className="contact_wrapper">
            <h1><span>Let’s <strong>work together</strong>!</span> I’d really like to help you</h1>
            <div className="contact">
                <div className="contact__text">
                    <h2>Contact me</h2>
                    <p>Feel free to contact me and tell me about your project or company. I would like to hear from you!</p>
                    <p>You can email me at <a href="mailto:hello@federicotllorente.work">hello@federicotllorente.work</a>, or simply complete the contact form. And if you wish, you can reach me out on my Social media as well:</p>
                    <ul>
                        <li>–<a target="_blank" rel="noreferrer" href="https://github.com/federicotllorente/">GitHub</a></li>
                        <li>–<a target="_blank" rel="noreferrer" href="https://www.instagram.com/federicotllorente/">Instagram</a></li>
                        <li>–<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/federicotllorente/">LinkedIn</a></li>
                    </ul>
                    <p>Let’s make something special!</p>
                </div>
                <div className="contact__form">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <input type="submit" value="SEND" />
                </div>
            </div>
        </div>
    );
};

export default ContactENG;