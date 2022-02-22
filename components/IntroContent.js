import React from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'

const IntroContent = () => {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.content}>
                <p>Hi, My name is</p>
                <h1>Prateek Niket</h1>
                <h3>Full-Stack Web Developer</h3>
            </div>
            <div className={styles.photo}>
                <Image id={styles.pfp} src="/static/media/pfp.jpeg" alt="Picture" width={370} height={370} />
            </div>
        </div>
    )
}

export default IntroContent