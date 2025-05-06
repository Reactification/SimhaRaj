'use client';

import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <h2>Contact Us</h2>
            <div className={styles.mapContainer}>
                <div className={styles.mapWrapper}>
                    <h3>Branch 1 Location</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153163!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0f0f0f%3A0x0!2zMzcnMzQyLjAiUyAxNDRyMTUuNSJ9!5e0!3m2!1sen!2sau!4v1616161616161!5m2!1sen!2sau"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
                <div className={styles.mapWrapper}>
                    <h3>Branch 2 Location</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153163!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0f0f0f%3A0x0!2zMzcnMzQyLjAiUyAxNDRyMTUuNSJ9!5e0!3m2!1sen!2sau!4v1616161616161!5m2!1sen!2sau"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
