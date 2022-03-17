import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutHeader = () => {
    useEffect(() => {
        AOS.init({ duration: 2000, delay: 800 });
    }, []);
    return (
        <div >
            <div data-aos="fade-right" className={styles.header}>
                <Image id={styles.pfp} src="/static/media/logo.png" alt="Picture" width={87.5} height={100} />
                <div className={styles.headerIntro}>
                    <h1>Prateek Niket</h1>
                    <Link href='https://github.com/PrateekPheonix'>
                        <h4>github.com/PrateekPheonix</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutHeader