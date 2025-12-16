"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HeroImageCarousel.module.css";

const IMAGES = [
    "/images/main1.jpg",
    "/images/main2.jpg",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
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
