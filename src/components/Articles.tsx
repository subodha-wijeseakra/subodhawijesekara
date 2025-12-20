"use client";

import { useState } from "react";
import styles from "./Articles.module.css";
import { ArrowUpRight } from "lucide-react";
import ArticlesModal from "./ArticlesModal";

interface Article {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    content: string;
    mediumLink: string;
}

const ARTICLES: Article[] = [
    {
        id: 1,
        title: "The Future of Full-Stack Development in the Age of AI",
        excerpt: "AI is no longer a separate domain reserved for data scientists.",
        date: "Dec 2024",
        content: "Full-stack development has always evolved alongside new tools, frameworks, and paradigms. From monolithic applications to microservices, and from simple HTML pages to highly interactive web platforms, the role of a full-stack developer has continuously expanded. Today, artificial intelligence (AI) is driving the next major shift reshaping how applications are built, tested, deployed, and maintained.",
        mediumLink: "https://medium.com/@wijesekararsc/why-next-js-is-becoming-the-go-to-framework-for-modern-web-applications-c762640ff440"
    },
    {
        id: 2,
        title: "Why Next.js Is Becoming the Go To Framework",
        excerpt: "In today’s fast-moving web ecosystem, developers and businesses are no longer satisfied with just “working” applications.",
        date: "Dec 2025",
        content: "One of the biggest reasons behind Next.js’s popularity is its focus on performance. Features like automatic code splitting, image optimization, and incremental static regeneration (ISR) ensure that users receive fast-loading pages without extra configuration. Pages load only the JavaScript they need, reducing bundle size and improving overall speed — especially important for mobile users.",
        mediumLink: "https://medium.com/@wijesekararsc/why-next-js-is-becoming-the-go-to-framework-for-modern-web-applications-c762640ff440"
    },
    {
        id: 3,
        title: "Scaling Frontend Architectures",
        excerpt: "Lessons learned from managing large-scale monorepos.",
        date: "Nov 2024",
        content: "As frontend applications grow, managing complexity becomes a primary challenge. Monorepos, using tools like Turborepo or Nx, offer a solution by allowing you to share code, configurations, and types across multiple projects.\n\nKey strategies for scaling include enforcing strict boundaries between features, using a design system library, and automating code quality checks. This ensures that as the team and codebase grow, velocity doesn't suffer.",
        mediumLink: "https://medium.com/"
    },
];

export default function Articles() {
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    return (
        <section id="articles" className={styles.section}>
            <h2 className={styles.title}>Articles</h2>
            <div className={styles.grid}>
                {ARTICLES.map((article) => (
                    <div
                        key={article.id}
                        className={styles.card}
                        onClick={() => setSelectedArticle(article)}
                        style={{ cursor: "pointer" }}
                        role="button"
                        tabIndex={0}
                    >
                        <div className={styles.cardContent}>
                            <span className={styles.date}>{article.date}</span>
                            <h3 className={styles.cardTitle}>{article.title}</h3>
                            <p className={styles.cardExcerpt}>{article.excerpt}</p>
                            <div className={styles.readMore}>
                                Read Article <ArrowUpRight size={16} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ArticlesModal
                isOpen={!!selectedArticle}
                onClose={() => setSelectedArticle(null)}
                article={selectedArticle}
            />
        </section>
    );
}
