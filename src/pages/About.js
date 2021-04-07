import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import bioPhoto from 'https://federicotllorente.com/wp-content/uploads/2021/04/bio_photo.png';

class About extends Component {
    render() {
        return (
            <div className="about_wrapper">
                <h1><span>I create</span> attractive, functional and professional <span>websites</span></h1>
                <div className="about">
                    <div className="about__introduction">
                        <div className="about__introduction__text">
                            <p>Hi, I’m Federico and I am a Front-end Developer and Web Designer. I create attractive and professional websites. Most of them are created with WordPress, but I also develop with HTML, CSS, JavaScript and PHP.</p>
                            <p>I really like design, and especially Web Design. Also, I really enjoy creating projects from scratch, and seeing how they grow to satisfy a need in the market.</p>
                            <p>I like to participate in ambitious projects and with a great goal. I truly think that at the end of the day, one will be as the people who are around, so that’s why I like to work with enthusiastic and happy people, who really like what they do.</p>
                            <p>You can reach me out on my Social media:</p>
                            <ul>
                                <li>–<a target="_blank" rel="noreferrer" href="https://www.instagram.com/federicotllorente/">Instagram</a></li>
                                <li>–<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/federicotllorente/">LinkedIn</a></li>
                                <li>–<a target="_blank" rel="noreferrer" href="https://www.behance.net/federicollorente">Behance</a></li>
                                <li>–<a href="mailto:hello@federicotllorente.work">Or simply email me!</a></li>
                            </ul>
                        </div>
                        <div className="about__introduction__image">
                            <img src={bioPhoto} alt="Federico Tejedor Llorente" />
                        </div>
                    </div>
                    <div className="about__content">
                        <p>My name is Federico Tejedor Llorente, and I was born in Montevideo, Uruguay. I’ve always liked the city and its movement, but nowadays I live in a town in Valladolid, Spain.</p>
                        <p>When I was 12 or 13 I discovered Photoshop, and I started to edit my friend’s photos and create graphics, like invitation cards and things like that. Then, I started to know how to use the other apps of the Adobe Suite.</p>
                        <p>A couple of years later, I found an HTML and CSS course on YouTube, and I took it. I started to practice my skills in these technologies, creating my very first websites for my father’s and uncle’s companies (in addition to a little of basic JavaScript I was learning from YouTube tutorials).</p>
                        <p>When I was 15 (almost 16) I started my Business Administration baccalaureate. It was a kind of an Associate’s Degree in Management, because I had so many hours of Accountability and Business Management.</p>
                        <p>There, my teachers always encouraged me to be an entrepreneur and follow my dreams and goals. So at the middle of 2019 I started an Entrepreneurship and Digital Marketing blog. Then, I finished with this project to start <a target="_blank" rel="noreferrer" href="https://federicotllorente.com/">my personal brand</a>.</p>
                        <p>At the same time of these studies, I started to take online courses about subjects I really like and enjoy: Web Development, UX Design and Digital Marketing. I’ve always been a self-taught person who’s always searching for new knowledge. I genuinely think people need to stay updated and learn constantly to be able to grow and evolve as a person and as a professional as well.</p>
                        <p>Currently, I create professional and attractive websites for digital consultants and professionals who offer their services online. I love to contribute to people with my knowledge and skills for helping them grow, develop and get the business of their dreams.</p>
                        <p>Concluding, I’d like to mention some of my hobbies like videogames, reading, movies, or walking. Yep, in recent times I enjoyed a lot walk in the field and feel the nature. Oh, and fun fact, according to the Myers-Briggs test it seems that my personality type is <a target="_blank" rel="noreferrer" href="http://www.personalitypage.com/INFJ.html">INFJ</a>, if this is something you would like to know.</p>
                        <p>You can download my Resume (CV) here in the PDF I let you down below. I want to remind you that you can always email me at <a href="mailto:hello@federicotllorente.work">hello@federicotllorente.work</a> or message me on my Social Media. Thanks for taking the time to read this. I hope we could work together!</p>
                        <p><Link to="/">Download Resume (XXXkB PDF)</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;