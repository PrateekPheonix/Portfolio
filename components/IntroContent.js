import React, { useRef, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { IoMdMail } from 'react-icons/io';


const IntroContent = () => {

    const typedTextSpan = useRef()
    const cursorSpan = useRef()


    useEffect(() => {
        AOS.init({ duration: 2000, delay: 800 });

        if (cursorSpan.current) {
            // typing animation
            const textArray = ["Full-Stack Web Developer", "Programmer", "Computer Science Engineer", "Keen Learner", "Student"];
            const typingDelay = 200;
            const erasingDelay = 100;
            const newTextDelay = 2000; // Delay between current and next text
            let textArrayIndex = 0;
            let charIndex = 0;

            const type = () => {
                if (charIndex < textArray[textArrayIndex].length) {
                    if (!cursorSpan.current.classList.contains("typing")) cursorSpan.current.classList.add("typing");
                    typedTextSpan.current.textContent += textArray[textArrayIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(type, typingDelay);
                }
                else {
                    cursorSpan.current.classList.remove("typing");
                    setTimeout(erase, newTextDelay);
                }
            }

            const erase = () => {
                if (charIndex > 0) {
                    if (!cursorSpan.current.classList.contains("typing")) cursorSpan.current.classList.add("typing");
                    typedTextSpan.current.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(erase, erasingDelay);
                }
                else {
                    cursorSpan.current.classList.remove("typing");
                    textArrayIndex++;
                    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                    setTimeout(type, typingDelay + 1100);
                }
            }

            if (textArray.length) setTimeout(type, newTextDelay + 250);
        }
    }, []);




    return (
        <div data-aos="fade-right" className={styles.contentContainer}>
            <div className={styles.content}>
                <p>Hi, My name is</p>
                <Link href="/">
                    <h1>Prateek Niket</h1>
                </Link>
                <p className={styles.ref}>I am a <span ref={typedTextSpan} className={styles.typedText}></span><span ref={cursorSpan} className={styles.cursor}>&nbsp;</span></p>
                <div className={styles.icons}>
                    <Link href="https://github.com/PrateekPheonix">
                        <BsGithub color='white' size='1.5em' />
                    </Link>
                    <Link href='https://www.linkedin.com/in/prateekniket/'>
                        <BsLinkedin color='white' size='1.5em' />
                    </Link>
                    <Link href='https://www.instagram.com/bruhhhh.teek/'>
                        <RiInstagramFill color='white' size='1.8em' />
                    </Link>
                    <Link href='mailto:prateekniket25@gmail.com'>
                        <IoMdMail color='white' size='1.8em' />
                    </Link>
                </div>
                <Link href="/about">
                    <p className={styles.more}>More About me</p>
                </Link>
            </div>
            <Link href="/">
                <div data-aos="zoom-in-left" className={styles.photo}>
                    <Image id={styles.pfp} src="/static/media/pfp.jpeg" alt="Picture" width={370} height={370} />
                </div>
            </Link>
        </div>
    )
}

export default IntroContent