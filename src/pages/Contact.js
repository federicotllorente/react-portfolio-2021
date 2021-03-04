import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="wrapper__content">
                <h1><span>Let’s <strong>work together</strong>!</span> I’d really like to help you</h1>
                <div className="contact">
                    <div className="contact__text">
                        <h2>Contact me</h2>
                        <p>I always want to help people to solve real business problems, and make strong connections to work together whenever is necessary. I’m open to freelance opportunities, medium or large projects as well.</p>
                        <p>Feel free to contact me and tell me about your project or company. I would like to hear from you!</p>
                        <p>You can email me at <a href="mailto:hello@federicotllorente.work">hello@federicotllorente.work</a>, or simply complete the contact form. And id you wish, you can reach me out on my Social media as well:</p>
                        <ul>
                            <li>–<a href="https://www.instagram.com/federicotllorente/">Instagram</a></li>
                            <li>–<a href="https://www.linkedin.com/in/federicotllorente/">LinkedIn</a></li>
                            <li>–<a href="https://www.behance.net/federicollorente">Behance</a></li>
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
    }
}

export default Contact;