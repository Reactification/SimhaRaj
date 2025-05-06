'use client';

import { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Only run on client-side
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                setIsDark(true);
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        }
    }, []);

    const toggleTheme = () => {
        const newDarkMode = !isDark;
        setIsDark(newDarkMode);

        // Save preference
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');

        // Apply theme
        document.documentElement.setAttribute('data-theme', newDarkMode ? 'dark' : 'light');
    };

    return (
        <button
            className={styles.toggle}
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
        >
            {isDark ? '🌙' : '☀️'}
        </button>
    );
}
