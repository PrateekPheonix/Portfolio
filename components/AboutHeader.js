import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutHeader = () => {
    useEffect(() => {
        AOS.init({ duration: 1500, delay: 800 });
    }, []);
    return (
        <div >
            <div data-aos="fade-right" className={styles.header}>
                <Link href='/home'>
                    <Image id={styles.logo} src="/static/media/logo.png" alt="Picture" width={87.5} height={100} />
                </Link>
                <Link href='/home'>
                    <div className={styles.headerIntro}>
                        <h1>Prateek Niket</h1>
                        <Link href='https://github.com/PrateekPheonix'>
                            <h4>github.com/PrateekPheonix</h4>
                        </Link>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default AboutHeader