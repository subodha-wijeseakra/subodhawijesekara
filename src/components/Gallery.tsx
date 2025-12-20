"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Gallery.module.css";

interface Photo {
    id: number;
    src: string;
    title: string;
    description: string;
}

const PHOTOS: Photo[] = [
    {
        id: 1,
        src: "/images/l4.png", // Forest/Nature
        title: "Exploring Nature",
        description: "Finding peace in the deep woods."
    },
    {
        id: 2,
        src: "/images/l1.png", // Travel/Adventure
        title: "Mountain Hiking",
        description: "Reaching new heights and breathtaking views."
    },
    {
        id: 3,
        src: "/images/l2.png", // Photography/Camera
        title: "Capturing Moments",
        description: "Freezing time through the lens."
    },
    {
        id: 4,
        src: "/images/l3.png", // Tech/Workspace
        title: "My Workspace",
        description: "Where ideas come to life."
    }
];

export default function Gallery() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === PHOTOS.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? PHOTOS.length - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setCurrent(index);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Life in Frames</h2>

                <div className={styles.carousel}>
                    <div className={styles.slideTrack}>
                        {PHOTOS.map((photo, index) => (
                            <div
                                key={photo.id}
                                className={`${styles.slide} ${index === current ? styles.active : ""}`}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={photo.src}
                                        alt={photo.title}
                                        fill
                                        className={styles.image}
                                        priority={index === 0}
                                        sizes="(max-width: 768px) 100vw, 900px"
                                    />
                                </div>
                                <div className={styles.caption}>
                                    <h3 className={styles.captionTitle}>{photo.title}</h3>
                                    <p className={styles.captionText}>{photo.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.controls}>
                        <button className={styles.controlButton} onClick={prevSlide} aria-label="Previous image">
                            <ChevronLeft size={24} />
                        </button>
                        <button className={styles.controlButton} onClick={nextSlide} aria-label="Next image">
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className={styles.indicators}>
                        {PHOTOS.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.indicator} ${index === current ? styles.active : ""}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
