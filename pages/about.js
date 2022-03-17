import React from 'react'
import Head from 'next/head'
import AboutHeader from '../components/AboutHeader'
import Skills from '../components/Skills'
import styles from '../styles/About.module.css'


const about = () => {
    return (
        <div className={styles.container}>
            < Head >
                <title>Prateek Niket</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head >
            <AboutHeader />
            <Skills />
        </div >
    )
}

export default about

