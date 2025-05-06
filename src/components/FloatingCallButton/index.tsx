'use client';

import { useState } from 'react';
import styles from './FloatingCallButton.module.css';

export default function FloatingCallButton() {
    // Replace with your WhatsApp number
    const phoneNumber = "919876543210"; // Format: country code + number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello,%20I'm%20interested%20in%20your%20services.`;

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={styles.floatingContainer}>
            <button
                className={`${styles.floatingButton} ${isExpanded ? styles.expanded : ''}`}
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label="Contact options"
            >
                <span className={styles.icon}>📞</span>
                {isExpanded && <span className={styles.text}>Contact Us</span>}
            </button>

            {isExpanded && (
                <div className={styles.contactOptions}>
                    <a
                        href={whatsappUrl}
                        className={styles.contactOption}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contact on WhatsApp"
                    >
                        <span className={styles.optionIcon}>💬</span>
                        <span className={styles.optionText}>WhatsApp</span>
                    </a>

                    <a
                        href={`tel:+${phoneNumber}`}
                        className={styles.contactOption}
                        aria-label="Call us"
                    >
                        <span className={styles.optionIcon}>📱</span>
                        <span className={styles.optionText}>Call</span>
                    </a>

                    <a
                        href="mailto:contact@yourcompany.com"
                        className={styles.contactOption}
                        aria-label="Email us"
                    >
                        <span className={styles.optionIcon}>✉️</span>
                        <span className={styles.optionText}>Email</span>
                    </a>
                </div>
            )}
        </div>
    );
}
