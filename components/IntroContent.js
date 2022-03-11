import React, { useRef, useEffect } from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

const IntroContent = () => {
    const content = useRef()
    const photo = useRef()
    const typedTextSpan = useRef()
    const cursorSpan = useRef()


    // typing animation
    const textArray = ["Full-Stack Web Developer", "Programmer", "Computer Science Engineer", "Keen Learner", "Student"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
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

    function erase() {
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

    useEffect(() => {
        gsap.from(content.current, { autoAlpha: 0, x: -100, delay: 0.9, duration: 1.2 });
        gsap.from(photo.current, { autoAlpha: 0, x: 100, delay: 0.9, duration: 1.2 });
        if (textArray.length) setTimeout(type, newTextDelay + 250);
    }, []);

    return (
        <div className={styles.contentContainer}>
            <div ref={content} className={styles.content}>
                <p>Hi, My name is</p>
                <h1>Prateek Niket</h1>
                <p className={styles.ref}>I am a <span ref={typedTextSpan} className={styles.typedText}></span><span ref={cursorSpan} className={styles.cursor}>&nbsp;</span></p>
            </div>
            <div ref={photo} className={styles.photo}>
                <Image id={styles.pfp} src="/static/media/pfp.jpeg" alt="Picture" width={370} height={370} />
            </div>
        </div>
    )
}

export default IntroContent