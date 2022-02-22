import React from 'react'
import styles from '../styles/About.module.css'

const Video = () => {
    return (
        <div>
            <video autoPlay muted loop className={styles.bgVideo}>
                <source src="/static/media/bg_video.webm" />
            </video>
            <div className={styles.cover}></div>
        </div>
    )
}

export default Video