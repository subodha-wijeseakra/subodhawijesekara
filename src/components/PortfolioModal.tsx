"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
import styles from "./PortfolioModal.module.css";

interface PortfolioModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: {
        title: string;
        image: string;
        gallery?: string[];
    } | null;
}

export default function PortfolioModal({ isOpen, onClose, item }: PortfolioModalProps) {
    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen || !item) return null;

    // Use gallery if available, otherwise just show main image x 3 for demo
    const images = item.gallery || [item.image, item.image, item.image];

    // Use Portal to escape parent stacking contexts
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <button className={styles.closeButton} onClick={onClose}>
                <X size={24} />
            </button>

            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{item.title}</h2>
                    <p className={styles.meta}>My latest designs</p>
                </div>

                <div className={styles.gallery}>
                    {images.map((imgSrc, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <Image
                                src={imgSrc}
                                alt={`${item.title} detail ${index + 1}`}
                                width={1200}
                                height={800}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>,
        document.body
    );
}
