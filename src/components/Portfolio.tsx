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
            "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2370&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2370&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2370&auto=format&fit=crop"
        ]
    },
    {
        id: 2,
        title: "Mobile App Concept",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2370&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2370&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2274&auto=format&fit=crop"
        ]
    },
    {
        id: 3,
        title: "Brand Identity",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600508774662-721440536881?q=80&w=2370&auto=format&fit=crop"
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
