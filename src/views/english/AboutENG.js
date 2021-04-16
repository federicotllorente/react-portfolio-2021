import React from 'react';

import bioPhoto from '../../img/bio_photo.png';

const AboutENG = () => (
    <div className="about_wrapper">
        <h1><span>I create</span> attractive, functional and professional <span>web apps</span></h1>
        <div className="about">
            <div className="about__introduction">
                <div className="about__introduction__text">
                    <p>Hi, I’m Federico and I am a Front-end Developer and Web Designer. I create attractive and professional web applications with (mainly) the MERN stack (MongoDB + Express + React + Nodejs).</p>
                    <p>I really like coding, and especially Front-end Development. I really like to create software and see how they grow to satisfy a need in the market.</p>
                    <p>I like to participate in ambitious projects and with a great goal. I truly think that at the end of the day, a person will be as the people who is with, so that’s why I like to work with enthusiastic and happy people, who really like what they do.</p>
                    <p>You can reach me out on my Social media:</p>
                    <ul>
                        <li>–<a target="_blank" rel="noreferrer" href="https://github.com/federicotllorente/">GitHub</a></li>
                        <li>–<a target="_blank" rel="noreferrer" href="https://www.instagram.com/federicotllorente/">Instagram</a></li>
                        <li>–<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/federicotllorente/">LinkedIn</a></li>
                        <li>–<a href="mailto:federicotllorente@gmail.com">Or simply email me!</a></li>
                    </ul>
                </div>
                <div className="about__introduction__image">
                    <img src={bioPhoto} alt="Federico Tejedor Llorente" />
                </div>
            </div>
            <div className="about__content">
                <p>My name is Federico Tejedor Llorente, and I was born in Montevideo, Uruguay. I’ve always liked the city and its movement, but nowadays I live in a town in Valladolid, Spain.</p>
                <p>When I was 12 or 13 I discovered Photoshop, and I started to edit my friend’s photos and create graphics, like invitation cards and things like that. Then, I started to know how to use the other apps of the Adobe Suite.</p>
                <p>A couple of years later, I found an HTML and CSS course on YouTube, and I took it. I started to practice my skills in those technologies, creating my very first websites for my father’s and uncle’s companies (in addition to a little of basic JavaScript I was learning from YouTube tutorials).</p>
                <p>When I was 15 (almost 16) I started my Business Administration baccalaureate. It was a kind of an Associate’s Degree in Management, because I had so many hours of Accountability and Business Management.</p>
                <p>There, my teachers always encouraged me to be an entrepreneur and follow my dreams and goals. So at the middle of 2019 I started an Entrepreneurship and Digital Marketing blog, which then I left because I started to focus much more in coding and programming (my real passion).</p>
                <p>At the same time of these studies, I started to take online courses about subjects I really like and enjoy: Web Development and UX Design. I’ve always been a self-taught person who’s always searching for new knowledge. I genuinely think people need to stay updated and learn constantly to be able to grow and evolve as a person and as a professional as well.</p>
                <p>Concluding, I’d like to mention some of my hobbies like videogames, reading, movies, or walking. Yep, in recent times I enjoyed a lot walk in the field and feel the nature. Oh, and fun fact, according to the Myers-Briggs test it seems that my personality type is <a target="_blank" rel="noreferrer" href="http://www.personalitypage.com/INFJ.html">INFJ</a>, if this is something you would like to know.</p>
                <p>You can download my Resume (CV) here in the PDF I let you down below. I want to remind you that you can always email me at <a href="mailto:federicotllorente@gmail.com">federicotllorente@gmail.com</a> or message me on my Social Media. Thanks for taking the time to read this. I hope we could work together!</p>
                <p><a target="_blank" rel="noreferrer" href="https://www.dropbox.com/s/vbixdcz1mv38bou/Federico%20Tejedor%20Llorente%20%E2%80%93%20Resume%3ACV%20%28English%29.pdf?dl=0">Download Resume (48,66 kB PDF, download via Dropbox)</a></p>
            </div>
        </div>
    </div>
);

export default AboutENG;