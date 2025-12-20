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
        title: "Chat Me AI",
        description: "Smart AI chat application",
        tags: ["Next.js", "Next Auth", "Gemini API", "Tailwind CSS", "bcryptjs"],
        link: "https://github.com/subodha-wijeseakra/chat_me_ai",
        image: "/images/atp3.png"
    },
    {
        id: 2,
        title: "Chat look",
        description: "Smart chat application with secured authentication",
        tags: ["Next.js", "Socket.io", "Tailwind CSS", "bcryptjs", "zod", "MongoDB"],
        link: "https://github.com/subodha-wijeseakra/chat_look",
        image: "/images/cht.png"
    },
    {
        id: 3,
        title: "Image chop",
        description: "Image compression and enhancemenet tool",
        tags: ["Next.js", "Tailwind CSS", "TypeScript", "TensorFlow.js"],
        link: "https://github.com/subodha-wijeseakra/image_chop",
        image: "/images/ic1.png"
    },
    {
        id: 4,
        title: "Task manager",
        description: "Smart task management application",
        tags: ["Next.js", "Tailwind CSS", "TypeScript", "zod", "bcryptjs", "Next Auth", "MongoDB"],
        link: "https://github.com/subodha-wijeseakra/task_manager",
        image: "/images/tma1.png"
    },
    {
        id: 5,
        title: "Image compression & Enhancement tool",
        description: "Real-time cryptocurrency visualizer and portfolio tracker using CoinGecko API.",
        tags: ["Next.js", "Web3", "Finance"],
        link: "https://github.com",
        image: "/images/ic1.png"
    },
    {
        id: 6,
        title: "Chat application",
        description: "A digital travel journal map for documenting trips and sharing memories.",
        tags: ["Mapbox", "Node.js", "Travel"],
        link: "https://github.com",
        image: "/images/ca1.png"
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
