import React from 'react'
import Image from 'next/image'
import styles from '../styles/Middle.module.css'

const MiddleOne = () => {
    return (
        <div className={styles.photo}>
            <Image id={styles.mediumOne} src="/static/media/middle1.png" alt="Picture" width={500} height={370} />
        </div>
    )
}

export default MiddleOne