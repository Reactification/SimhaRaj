'use client';

import React from 'react';
import styles from './Services.module.css';

interface Service {
    id: number;
    title: string;
    description: string;
    benefits: string[];
    icon: string;
}

const services: Service[] = [
    {
        id: 1,
        title: "Yoga Therapy",
        description: "Experience personalized yoga sessions that combine physical postures, breathing techniques, and meditation for holistic well-being.",
        benefits: [
            "Improves flexibility and strength",
            "Reduces stress and anxiety",
            "Enhances respiratory function",
            "Promotes better sleep"
        ],
        icon: "🧘‍♀️"
    },
    {
        id: 2,
        title: "Meditation & Mindfulness",
        description: "Discover inner peace through guided meditation sessions that help develop awareness and cultivate a balanced state of mind.",
        benefits: [
            "Reduces stress and anxiety",
            "Improves focus and concentration",
            "Enhances emotional well-being",
            "Promotes better sleep quality"
        ],
        icon: "🧘‍♂️"
    },
    {
        id: 3,
        title: "De-Addiction Programs",
        description: "Comprehensive de-addiction programs combining naturopathic treatments and counseling for complete recovery and wellness.",
        benefits: [
            "Natural detoxification",
            "Stress management",
            "Lifestyle counseling",
            "Long-term recovery support"
        ],
        icon: "💆‍♂️"
    },
    {
        id: 4,
        title: "Ayurvedic Treatments",
        description: "Experience authentic Ayurvedic therapies tailored to your unique constitution with herbal remedies and therapeutic massages.",
        benefits: [
            "Personalized treatment plans",
            "Herbal remedies",
            "Therapeutic massages",
            "Dietary guidance"
        ],
        icon: "🌿"
    }
];

export default function Services() {
    return (
        <section id="services" className={styles.servicesSection}>
            <div className={styles.backgroundOverlay}></div>
            <div className={styles.content}>
                <h2>Our Services</h2>
                <p className={styles.subtitle}>Holistic Healing for Mind, Body, and Soul</p>

                <div className={styles.servicesGrid}>
                    {services.map((service) => (
                        <div key={service.id} className={styles.serviceCard}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{service.icon}</span>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <ul className={styles.benefitsList}>
                                {service.benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
