import React from 'react';

import bioPhoto from '../../img/new_bio_photo.png';

const AboutSPA = () => (
    <div className="about_wrapper">
        <h1><span>Creo aplicaciones web</span> atractivas, funcionales y profesionales</h1>
        <div className="about">
            <div className="about__introduction">
                <div className="about__introduction__text">
                    <p>Hola, soy Federico y soy desarrollador Front-end y diseñador web. Creo aplicaciones web atractivas y profesionales con (principalmente) el stack MERN (MongoDB + Express + React + Nodejs).</p>
                    <p>Me encanta programar, y especialmente el desarrollo Front-end. Me gusta mucho crear software y ver cómo este satisface una necesidad en el mercado.</p>
                    <p>Me gusta participar en proyectos ambiciosos con un gran objetivo. Creo fielmente en que al final del día, uno será como las personas con las que se rodea, por eso me gusta tanto trabajar con personas entusiastas y alegres, y que realmente les gusta lo que hacen.</p>
                    <p>Me puedes seguir en mis redes sociales:</p>
                    <ul>
                        <li>–<a target="_blank" rel="noreferrer" href="https://github.com/federicotllorente/">GitHub</a></li>
                        <li>–<a target="_blank" rel="noreferrer" href="https://www.instagram.com/federicotllorente/">Instagram</a></li>
                        <li>–<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/federicotllorente/">LinkedIn</a></li>
                        <li>–<a href="mailto:federicotllorente@gmail.com">¡O bien envíame un email!</a></li>
                    </ul>
                </div>
                <div className="about__introduction__image">
                    <img src={bioPhoto} width="450" alt="Federico Tejedor Llorente" />
                </div>
            </div>
            <div className="about__content">
                <p>Mi nombre es Federico Tejedor Llorente, y nací en Montevideo, Uruguay. Siempre me gustó la ciudad y el movimiento que hay en ella, pero actualmente vivo en un pueblo en Valladolid, España.</p>
                <p>Cuando tenía 12 o 13 años descubrí Photoshop, y comencé a editar las fotos de mis amigos y diseñar gráficos, como tarjetas de cumpleaños o cosas por el estilo. Luego, comencé a aprender más sobre cómo utilizar las demás herramientas de la Suite de Adobe.</p>
                <p>Un par de años más tarde, encontré unos curso de HTML y CSS en YouTube, y lo tomé. Comencé a desarrollar mis habilidades en estas tecnologías, creando mis primeros sitios web para las empresas de mi padre y mi tío (a parte del JavaScript básico que iba aprendiendo con tutoriales en YouTube).</p>
                <p>Cuando tenía 15 (casi 16) empecé mi bachillerato en Administración de empresas. Era como una especie de Formación Profesional en Administración, porque tenía mucho contenido de contabilidad y gestión empresarial.</p>
                <p>En esos momentos, mis profesores siempre me motivaron a ser un emprendedor y a seguir mis sueños y objetivos. Por lo que a mitad del 2019 comencé con un blog de emprendimiento y marketing digital, que luego lo terminé dejando ya que me comencé a enfocar mucho más en la programación (mi verdadera pasión).</p>
                <p>Al mismo tiempo que estudiaba, comencé a tomar cursos online sobre las materias que más me interesan: desarrollo web y diseño UX. Desde siempre fui una persona autodidacta que siempre está buscando nuevos conocimientos. Pienso que las personas necesitamos estar en constante aprendizaje y desarrollo para ser capaces de crecer y evolucionar tanto como profesional como persona como tal.</p>
                <p>Concluyendo un poco, me gustaría mencionar algunos de mis hobbies como los videojuegos, las películas, leer o caminar. Y sí, en estos últimos tiempos he estado disfrutando mucho de salir a caminar al aire libre y disfrutar el paisaje. Oh, y un dato curioso, de acuerdo al test Myers-Briggs parece ser que mi tipo de personalidad es la <a target="_blank" rel="noreferrer" href="http://www.personalitypage.com/INFJ.html">INFJ</a>, si esto es algo que te interesa saber.</p>
                <p>Puedes descargar mi CV con el PDF que te dejo aquí debajo. Te quiero recordar que puedes enviarme un email a <a href="mailto:federicotllorente@gmail.com">federicotllorente@gmail.com</a> o bien un mensaje por mis redes sociales. Gracias por tomarte el tiempo de leer esto. ¡Me encantaría trabajar juntos!</p>
                <p><a target="_blank" rel="noreferrer" href="https://www.dropbox.com/s/9799f9x32960ath/Federico%20Tejedor%20Llorente%20%E2%80%93%20CV%20%28Espa%C3%B1ol%29.pdf?dl=0">Descargar Currículum (43,45 kB PDF, descarga vía Dropbox)</a></p>
            </div>
        </div>
    </div>
);

export default AboutSPA;