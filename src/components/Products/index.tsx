'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './Products.module.css';

interface Product {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
}

const products: Product[] = [
    {
        id: 1,
        title: "Yoga Mat",
        description: "Premium quality, non-slip yoga mat with perfect cushioning for comfortable practice.",
        price: "$29.99",
        image: "/images/products/product1.jpg"
    },
    {
        id: 2,
        title: "Meditation Cushion",
        description: "Ergonomic meditation cushion designed for optimal comfort during extended sessions.",
        price: "$39.99",
        image: "/images/products/product2.jpg"
    },
    {
        id: 3,
        title: "Ayurvedic Kit",
        description: "Complete Ayurvedic wellness kit with essential oils and herbal supplements.",
        price: "$49.99",
        image: "/images/products/product3.jpg"
    },
    {
        id: 4,
        title: "Wellness Journal",
        description: "Beautifully designed journal for tracking your wellness journey and daily reflections.",
        price: "$19.99",
        image: "/images/products/product4.jpg"
    },
    {
        id: 5,
        title: "Herbal Tea Set",
        description: "Curated collection of organic herbal teas for relaxation and wellness.",
        price: "$34.99",
        image: "/images/products/product5.jpg"
    }
];

export default function Products() {
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const scrollAmount = 300;
            const newScrollPosition = containerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            containerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="products" className={styles.productsSection}>
            <div className={styles.backgroundOverlay}></div>
            <div className={styles.content}>
                <h2>Our Products</h2>
                <p className={styles.subtitle}>Essential Items for Your Wellness Journey</p>

                <div className={styles.productsContainer}>
                    <button
                        className={`${styles.scrollButton} ${styles.leftButton}`}
                        onClick={() => scroll('left')}
                        aria-label="Scroll left"
                    >
                        ←
                    </button>

                    <div className={styles.productsWrapper} ref={containerRef}>
                        {products.map((product) => (
                            <div key={product.id} className={styles.productCard}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        sizes="(max-width: 768px) 300px, 350px"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.productInfo}>
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                    <span className={styles.price}>{product.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className={`${styles.scrollButton} ${styles.rightButton}`}
                        onClick={() => scroll('right')}
                        aria-label="Scroll right"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}