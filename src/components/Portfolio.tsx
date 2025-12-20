"use client";

import { useState } from "react";
import styles from "./Portfolio.module.css";
import Image from "next/image";
import PortfolioModal from "./PortfolioModal";

// Enhanced data with gallery images (reusing unsplash for demo)
const PORTFOLIO_ITEMS = [
    {
        id: 1,
        title: "UI & UX Design",
        image: "/images/uiux1.png",
        gallery: [
            "/images/uiux2.png",
            "/images/uiux3.png",
            "/images/uiux4.png"
        ]
    },
    {
        id: 2,
        title: "Mobile ready solutions",
        image: "/images/ma1.png",
        gallery: [
            "/images/ma2.png",
            "/images/ma3.png"
        ]
    },
    {
        id: 3,
        title: "Make Essentials",
        image: "/images/wea1.png",
        gallery: [
            "/images/wea2.png",
            "/images/wea3.png"
        ]
    },
    {
        id: 4,
        title: "Following Standards",
        image: "/images/tma1.png",
        gallery: [
            "/images/tma2.png",
            "/images/tma3.png"
        ]
    },
    {
        id: 5,
        title: "Understanding the ergonomics",
        image: "/images/eg1.png",
        gallery: [
            "/images/eg2.png",
            "/images/eg3.png"
        ]
    },
    {
        id: 6,
        title: "Always on top",
        image: "/images/atp1.png",
        gallery: [
            "/images/atp2.png",
            "/images/atp3.png"
        ]
    },
];

export default function Portfolio() {
    const [selectedItem, setSelectedItem] = useState<(typeof PORTFOLIO_ITEMS)[0] | null>(null);

    return (
        <section id="portfolio" className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Visual Portfolio</h2>
                <p>A gallery of my creative work and designs.</p>
            </div>

            <div className={styles.gallery}>
                {PORTFOLIO_ITEMS.map((item) => (
                    <div
                        key={item.id}
                        className={styles.item}
                        onClick={() => setSelectedItem(item)}
                        style={{ cursor: "pointer" }}
                    >
                        <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                        <div className={styles.overlay}>
                            <span className={styles.caption}>{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>

            <PortfolioModal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                item={selectedItem}
            />
        </section>
    );
}
