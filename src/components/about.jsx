import React from 'react';
import '../css/about.css';
import AboutTranslate from './about/AboutTranslate';
import Team from './about/Team';
import Tools from './about/Tools';

const About = (props) => { 
    
    return(
        <section className="about__container">
            <div className="about">
                <AboutTranslate />
                <Team team={props.about.team}/>
                <Tools toolses={props.about.toolses} />
            </div>
        </section>
    );
}

export default About;