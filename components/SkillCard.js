import React, { useEffect } from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillCard = (props) => {

    useEffect(() => {
        AOS.init({ duration: 1500, delay: 800 });
    }, []);

    return (
        <div>
            <div className={styles.skillCard}>
                <p>{props.skill}</p>
                <Image id={styles.logo} src={props.src} alt="Picture" width={48} height={48} />
            </div>
        </div>
    )
}

export default SkillCard