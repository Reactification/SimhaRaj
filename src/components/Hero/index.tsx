'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const phoneNumber = "919876543210";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello,%20I'm%20interested%20in%20your%20services.`;

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.overlay} />
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Heal, Balance, Thrive

                </h1>
                <p className={styles.subtitle}>
                    Embrace Wellness with Ayurveda, Yoga & Naturopathy
                </p>
                <a
                    href={whatsappUrl}
                    className={`btn ${styles.cta}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Call Us
                </a>
            </div>
            <div
                className={styles.backgroundImage}
                style={{
                    transform: `translateY(${scrollPosition * 0.5}px)`
                }}
            >
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Hero background"
                    fill
                    priority
                    quality={100}
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </section>
    );
}