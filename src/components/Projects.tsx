import styles from "./Projects.module.css";
import Link from "next/link";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link: string;
    image: string;
}

const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Task Manager",
        description: "A comprehensive dashboard for financial analytics using Next.js and Tailwind.",
        tags: ["Next.js", "Next Auth", "MongoDB", "Tailwind CSS", "bcryptjs", "zod"],
        link: "https://github.com",
        image: "/images/tma1.jpg"
    },
    {
        id: 2,
        title: "NeoCommerce",
        description: "Modern e-commerce platform with headless architecture and Stripe integration.",
        tags: ["React", "Stripe", "E-commerce"],
        link: "https://github.com",
        image: "/images/wa1.png"
    },
    {
        id: 3,
        title: "AI Chatbot",
        description: "Intelligent conversational agent powered by LLMs for customer support.",
        tags: ["AI", "Python", "API"],
        link: "https://github.com",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2370&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "TaskFlow",
        description: "A collaborative project management tool for remote teams with real-time updates.",
        tags: ["React", "Firebase", "Productivity"],
        link: "https://github.com",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2372&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "CryptoViz",
        description: "Real-time cryptocurrency visualizer and portfolio tracker using CoinGecko API.",
        tags: ["Next.js", "Web3", "Finance"],
        link: "https://github.com",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2369&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Wanderlust",
        description: "A digital travel journal map for documenting trips and sharing memories.",
        tags: ["Mapbox", "Node.js", "Travel"],
        link: "https://github.com",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2321&auto=format&fit=crop"
    }
];

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Selected Projects</h2>
                <p>A collection of my recent work and experiments.</p>
            </div>

            <div className={styles.grid}>
                {PROJECTS.map((project) => (
                    <Link href={project.link} key={project.id} className={styles.card} target="_blank" rel="noopener noreferrer">
                        <div className={styles.cardImage}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className={styles.image} // We will need to update CSS to handle this
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            <p className={styles.cardDesc}>{project.description}</p>
                            <div className={styles.tags}>
                                {project.tags.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
