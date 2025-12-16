"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HeroImageCarousel.module.css";

const IMAGES = [
    "/images/main1.jpg",
    "/images/main2.jpg",
    "/images/main3.jpg",
    "/images/main4.jpeg"
];

export default function HeroImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.carousel}>
            {IMAGES.map((src, index) => (
                <div
                    key={index}
                    className={`${styles.imageContainer} ${index === currentIndex ? styles.active : ""}`}
                >
                    <Image
                        src={src}
                        alt="Hero background"
                        fill
                        className={styles.image}
                        priority={index === 0}
                    />
                </div>
            ))}
            <div className={styles.overlay} />
        </div>
    );
}
