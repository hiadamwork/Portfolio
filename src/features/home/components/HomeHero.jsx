import { Badge, Button, Container } from "@/components/ui";
import { cx } from "@/utils/cx";
import { CodeEditor } from "@/features/home/components/CodeEditor";
import {
    codeLines,
    floatingLabels,
    heroTechnologies,
} from "@/features/home/data/homeHero";
import { ExploreCard } from "@/features/home/components/ExploreCard";

import styles from "./HomeHero.module.css";

function FloatingLabels() {
    return floatingLabels.map((item) => (
        <span
            className={cx(styles.floatingLabel, styles[item.className])}
            key={item.label}
        >
            {item.label}
        </span>
    ));
}

export function HomeHero() {
    const handleScrollToExplore = () => {
        document
            .getElementById("home-explore")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className={styles.hero} aria-labelledby="home-hero-title">
            <div className={styles.backgroundGrid} />
            <div className={styles.blueGlow} />
            <div className={styles.purpleGlow} />
            <div className={styles.bottomGlow} />

            <Container className={styles.heroContainer} size="wide">
                <div className={styles.content}>
                    <p className={styles.eyebrow}>
                        Full-Stack Software Developer
                    </p>

                    <h1 className={styles.title} id="home-hero-title">
                        <span>Hi, I'm Adam.</span>I build modern web
                        applications that users love.
                    </h1>

                    <p className={styles.description}>
                        Full-stack software developer specializing in React,
                        Java and modern backend systems. I create fast, scalable
                        and beautiful digital experiences for startups,
                        businesses and individuals.
                    </p>

                    <div className={styles.actions}>
                        <Button as="a" href="/contact" variant="primary">
                            Hire Me
                        </Button>
                        <Button as="a" href="/projects" variant="secondary">
                            View Projects
                        </Button>
                        <span className={styles.availability}>
                            <span className={styles.availabilityDot} />
                            Available for Freelance
                        </span>
                    </div>

                    <div
                        className={styles.technologyGroup}
                        aria-label="Technology badges"
                    >
                        <span className={styles.technologyLabel}>
                            Technology Badges
                        </span>
                        <div className={styles.technologyList}>
                            {heroTechnologies.map((technology) => (
                                <Badge
                                    key={technology.label}
                                    tone={technology.tone}
                                >
                                    {technology.label}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.visual} aria-hidden="true">
                    <FloatingLabels />
                    <div className={styles.orbitOne} />
                    <div className={styles.orbitTwo} />
                    <div className={styles.meshShape} />
                    <div className={styles.sphereLarge} />
                    <div className={styles.sphereSmall} />
                    <CodeEditor codeLines={codeLines} />
                </div>

                <button
                    className={styles.scrollIndicator}
                    onClick={handleScrollToExplore}
                    type="button"
                >
                    <span className={styles.mouse}>
                        <span />
                    </span>
                    <span>Scroll to explore</span>
                </button>
            </Container>

            <section
                className={styles.exploreSection}
                id="home-explore"
                aria-labelledby="home-explore-title"
            >
                <Container className={styles.exploreContainer} size="wide">
                    <div className={styles.exploreHeader}>
                        <p className={styles.exploreEyebrow}>
                            Explore the experience
                        </p>
                        <h2 id="home-explore-title">
                            Premium software, clear process and thoughtful
                            delivery.
                        </h2>
                        <p>
                            From product strategy and polished UI to resilient
                            backend systems, every build is shaped around speed,
                            quality and long-term maintainability.
                        </p>
                    </div>

                    <div className={styles.exploreGrid}>
                        <ExploreCard
                            number="01"
                            title="Selected work"
                            description="See how React, Java and modern APIs come together to create fast, scalable and beautiful web applications."
                            buttonLabel="Explore projects"
                            link="/projects"
                        />
                        <ExploreCard
                            number="02"
                            title="Services"
                            description="Frontend systems, backend foundations and
                                full-stack product delivery for ambitious teams."
                            buttonLabel="Learn more"
                            link="/about"
                        />
                        <ExploreCard
                            number="03"
                            title="About the approach"
                            description="Design-led thinking, clean architecture and a
                                practical, scalable way of building."
                            buttonLabel="Start a conversation"
                            link="/contact"
                        />
                    </div>
                </Container>
            </section>
        </section>
    );
}