import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.section}>
                        <h3>Company</h3>
                        <ul>
                            <li><Link href="#about">About Us</Link></li>
                            <li><Link href="#services">Services</Link></li>
                            <li><Link href="#products">Products</Link></li>
                            <li><Link href="#testimonials">Testimonials</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3>Services</h3>
                        <ul>
                            <li><Link href="#services">Yoga Therapy</Link></li>
                            <li><Link href="#services">Meditation & Mindfulness</Link></li>
                            <li><Link href="#services">De-Addiction Programs</Link></li>
                            <li><Link href="#services">Ayurvedic Treatments</Link></li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3>Contact</h3>
                        <ul>
                            <li>Email: info@example.com</li>
                            <li>Phone: (123) 456-7890</li>
                            <li>Address: 123 Business St,</li>
                            <li>City, State 12345</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3>Follow Us</h3>
                        <div className={styles.social}>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
