import React, { useRef, useEffect } from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import { gsap } from "gsap";

const IntroContent = () => {
    const content = useRef()
    const photo = useRef()
    useEffect(() => {
        gsap.from(content.current, { autoAlpha: 0, x: -100, delay: 0.9, duration: 1.2 });
        gsap.from(photo.current, { autoAlpha: 0, x: 100, delay: 0.9, duration: 1.2 });
    }, []);
    return (
        <div className={styles.contentContainer}>
            <div ref={content} className={styles.content}>
                <p>Hi, My name is</p>
                <h1>Prateek Niket</h1>
                <h3>Full-Stack Web Developer</h3>
            </div>
            <div ref={photo} className={styles.photo}>
                <Image id={styles.pfp} src="/static/media/pfp.jpeg" alt="Picture" width={370} height={370} />
            </div>
        </div>
    )
}

export default IntroContent