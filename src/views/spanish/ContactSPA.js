import React from 'react';

const ContactENG = props => {
    return (
        <div className="contact_wrapper">
            <h1><span>¡<strong>Trabajemos juntos</strong>!</span> Me encantará ayudarte</h1>
            <div className="contact">
                <div className="contact__text">
                    <h2>Contáctame</h2>
                    <p>Siéntete libre de contactarme y contarme sobre tu proyecto o empresa. ¡Me encantará oír de ti!</p>
                    <p>Puedes enviarme un email a <a href="mailto:federicotllorente@gmail.com">hello@federicotllorente.work</a>, o simplemente completa este formulario. Y si quieres, puedes también contactarme por mis redes sociales:</p>
                    <ul>
                        <li>–<a target="_blank" rel="noreferrer" href="https://github.com/federicotllorente/">GitHub</a></li>
                        <li>–<a target="_blank" rel="noreferrer" href="https://www.instagram.com/federicotllorente/">Instagram</a></li>
                        <li>–<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/federicotllorente/">LinkedIn</a></li>
                    </ul>
                    <p>¡Hagamos algo increíble!</p>
                </div>
                <div className="contact__form">
                    <form action="" method="post">
                        <input type="text" placeholder="Nombre" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Mensaje"></textarea>
                        <input type="submit" value="ENVIAR" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactENG;