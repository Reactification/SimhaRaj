'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    text: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO",
        company: "TechInnovate",
        text: "Working with this team has transformed our business completely. Their innovative solutions helped us increase our revenue by 40% in just six months.",
        avatar: "/images/testimonial-1.jpg"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Marketing Director",
        company: "GlobalBrands",
        text: "The level of professionalism and technical expertise is outstanding. They delivered our project ahead of schedule and the results exceeded our expectations.",
        avatar: "/images/testimonial-2.jpg"
    },
    {
        id: 3,
        name: "Priya Sharma",
        role: "CTO",
        company: "FutureScale",
        text: "Their attention to detail and commitment to quality is exceptional. The solution they provided has streamlined our operations and reduced costs significantly.",
        avatar: "/images/testimonial-3.jpg"
    }
];

export default function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const scrollPosition = window.scrollY;
                // This creates the parallax effect by moving the background slower than the scroll
                sectionRef.current.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="testimonials" className={styles.testimonials} ref={sectionRef}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <h2>What Our Clients Say</h2>
                <div className={styles.grid}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className={styles.card}>
                            <div className={styles.content}>
                                <p className={styles.quote}>&ldquo;{testimonial.text}&rdquo;</p>
                                <div className={styles.author}>
                                    <div className={styles.avatar}>
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            width={60}
                                            height={60}
                                            style={{ objectFit: 'cover', borderRadius: '50%' }}
                                        />
                                    </div>
                                    <div className={styles.info}>
                                        <h3>{testimonial.name}</h3>
                                        <p>{testimonial.role}, {testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
