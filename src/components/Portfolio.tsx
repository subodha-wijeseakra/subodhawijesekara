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
            "/images/ma1.png",
            "/images/ma2.png",
            "/images/ma3.png"
        ]
    },
    {
        id: 3,
        title: "Weather application",
        image: "/images/wea1.png",
        gallery: [
            "/images/wea1.png",
            "/images/wea2.png",
            "/images/wea3.png"
        ]
    },
    {
        id: 4,
        title: "Marketing Assets",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2370&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2370&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2274&auto=format&fit=crop"
        ]
    },
    {
        id: 5,
        title: "3D Illustration",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2232&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2232&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2370&auto=format&fit=crop"
        ]
    },
    {
        id: 6,
        title: "Social Media Kit",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2274&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2274&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1611926653458-09294b3019dc?q=80&w=2370&auto=format&fit=crop"
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
