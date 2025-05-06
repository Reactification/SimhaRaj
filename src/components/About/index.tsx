'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            observer.disconnect();
        };
    }, []);

    return (
        <section id="about" className={styles.about} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/about.jpg"
                        alt="About us"
                        width={500}
                        height={500}
                        quality={100}
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div className={styles.content}>
                    <h2>About Us</h2>
                    <p className={styles.description}>
                        We are passionate about delivering exceptional value to our clients
                        through innovative solutions and dedicated service. With years of
                        experience and a commitment to excellence, we help businesses transform
                        and grow in the digital age.
                    </p>
                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <h3>Our Mission</h3>
                            <p>To empower businesses with cutting-edge technology solutions.</p>
                        </div>
                        <div className={styles.feature}>
                            <h3>Our Vision</h3>
                            <p>To be the leading force in digital transformation worldwide.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
