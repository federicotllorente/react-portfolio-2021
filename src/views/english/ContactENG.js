import React from 'react';

const ContactENG = props => {
    return (
        <div className="contact_wrapper">
            <h1><span>Let’s <strong>work together</strong>!</span> I’d really like to help you</h1>
            <div className="contact">
                <div className="contact__text">
                    <h2>Contact me</h2>
                    <p>Feel free to contact me and tell me about your project or company. I would like to hear from you!</p>
                    <p>You can email me at <a href="mailto:federicotllorente@gmail.com">hello@federicotllorente.work</a>, or simply complete the contact form. And if you wish, you can reach me out on my Social media as well:</p>
                    <ul>
                        <li>–<a target="_blank" rel="noreferrer" href="https://github.com/federicotllorente/">GitHub</a></li>
                        <li>–<a target="_blank" rel="noreferrer" href="https://www.instagram.com/federicotllorente/">Instagram</a></li>
                        <li>–<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/federicotllorente/">LinkedIn</a></li>
                    </ul>
                    <p>Let’s make something special!</p>
                </div>
                <div className="contact__form">
                    <form onSubmit={e => props.handleSubmit(e)} method="post">
                        <input type="text" onChange={e => props.handleChange(e, 'name')} value={props.name} placeholder="Name" required />
                        <input type="email" onChange={e => props.handleChange(e, 'email')} value={props.email} placeholder="Email" required />
                        <textarea onChange={e => props.handleChange(e, 'message')} value={props.message} placeholder="Message" required></textarea>
                        <input type="submit" value="SEND" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactENG;