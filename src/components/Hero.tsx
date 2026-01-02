import Link from "next/link";
import styles from "./Hero.module.css";
import { ArrowRight, Github, Linkedin, Facebook, Instagram } from "lucide-react";
import HeroImageCarousel from "./HeroImageCarousel";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <HeroImageCarousel />
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Building <span className={styles.gradientText}>digital experiences</span> <br /> that matter.
                </h1>
                <p className={styles.subtitle}>
                    I'm Subodha Wijesekara. Crafting high-performance web applications with a focus on design and user experience.
                </p>

                <div className={styles.actions}>
                    <Link href="#contact" className={styles.buttonPrimary}>
                        Contact Me <ArrowRight size={18} />
                    </Link>

                    <Link href="#projects" className={styles.buttonSecondary}>
                        View Projects
                    </Link>
                </div>

                <div className={styles.socials}>
                    <a href="https://www.linkedin.com/in/rscwijesekara/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                        <Linkedin size={22} />
                    </a>
                    <a href="https://github.com/subodha-wijesekara" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                        <Github size={22} />
                    </a>
                    <a href="https://web.facebook.com/wijesekararsc" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                        <Facebook size={22} />
                    </a>
                    <a href="https://www.instagram.com/subodhaoninsta" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                        <Instagram size={22} />
                    </a>
                    <a href="https://x.com/WijesekaraSC" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X (Twitter)">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
