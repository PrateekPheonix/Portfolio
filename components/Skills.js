import React, { useEffect } from 'react'
import styles from '../styles/About.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SkillCard from './SkillCard';

const Skills = () => {

    useEffect(() => {
        AOS.init({ duration: 1500, delay: 1300 });
    }, []);

    return (
        <div>
            <div data-aos="fade-right" data-aos-delay="1500" className={styles.skills}>
                <p className={styles.head}>Things I am good at !</p>
                <hr />
            </div>
            <div className={styles.category}>
                <div className={styles.subcategory}>
                    <h2 data-aos="zoom-in-down" data-aos-delay="2300">Web Development</h2>
                    <SkillCard skill='HTML5' src='/static/media/skills/html5.png' />
                    <SkillCard skill='CSS3' src='/static/media/skills/css3.png' />
                    <SkillCard skill='JavaScript' src='/static/media/skills/javascript.png' />
                    <SkillCard skill='Bootstrap' src='/static/media/skills/bootstrap.png' />
                    <SkillCard skill='jQuery' src='/static/media/skills/jquery.png' />
                    <SkillCard skill='Material UI' src='/static/media/skills/material-ui.png' />
                    <SkillCard skill='React' src='/static/media/skills/react.png' />
                    <SkillCard skill='Redux' src='/static/media/skills/redux.png' />
                    <SkillCard skill='Next.js' src='/static/media/skills/nextjs.png' />
                    <SkillCard skill='Node.js' src='/static/media/skills/nodejs.png' />
                    <SkillCard skill='Express.js' src='/static/media/skills/express.png' />
                    <SkillCard skill='Socket.io' src='/static/media/skills/socketio.png' />
                    <SkillCard skill='MongoDB' src='/static/media/skills/mongodb.png' />
                </div>
                <div className={styles.subcategory}>
                    <h2 data-aos="zoom-in-down" data-aos-delay="2300">Programming</h2>
                    <SkillCard skill='C Language' src='/static/media/skills/c-programming.png' />
                    <SkillCard skill='C++ Language' src='/static/media/skills/c++.png' />
                    <SkillCard skill='Java' src='/static/media/skills/java.png' />
                    <SkillCard skill='Python' src='/static/media/skills/python.png' />
                    <SkillCard skill='Dart' src='/static/media/skills/dart.png' />
                </div>
                <div className={styles.subcategory}>
                    <h2 data-aos="zoom-in-down" data-aos-delay="2200">Tools/Platform</h2>
                    <SkillCard skill='Git' src='/static/media/skills/git.png' />
                    <SkillCard skill='GitHub' src='/static/media/skills/github.png' />
                    <SkillCard skill='GitLab' src='/static/media/skills/gitlab.png' />
                    <SkillCard skill='Postman' src='/static/media/skills/postman.png' />
                    <SkillCard skill='Figma' src='/static/media/skills/figma.png' />
                    <SkillCard skill='VS Code' src='/static/media/skills/vscode.png' />
                    <SkillCard skill='Atom' src='/static/media/skills/atom.png' />
                </div>
            </div>
        </div>
    )
}

export default Skills