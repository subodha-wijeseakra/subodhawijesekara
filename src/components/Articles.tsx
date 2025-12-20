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
        excerpt: "AI is no longer a separate domain reserved for data scientists. It is rapidly becoming an integral part of the modern software development lifecycle.",
        date: "Dec 2024",
        content: "Full-stack development has always evolved alongside new tools, frameworks, and paradigms. From monolithic applications to microservices, and from simple HTML pages to highly interactive web platforms, the role of a full-stack developer has continuously expanded. Today, artificial intelligence (AI) is driving the next major shift reshaping how applications are built, tested, deployed, and maintained.",
        mediumLink: "https://medium.com/@wijesekararsc/why-next-js-is-becoming-the-go-to-framework-for-modern-web-applications-c762640ff440"
    },
    {
        id: 2,
        title: "The Art of Micro-Interactions",
        excerpt: "How subtle animations can significantly improve user experience.",
        date: "Dec 2024",
        content: "Micro-interactions are the small, functional animations that guide users through an application. Think of the 'like' button animation on Twitter or the swipe gesture to archive an email.\n\nThese details may seem minor, but they contribute heavily to the overall 'feel' of a product. They provide feedback, communicate system status, and can even prevent errors. A well-designed micro-interaction delights the user and makes the interface feel alive.",
        mediumLink: "https://medium.com/"
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
