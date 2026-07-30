import { useRef, useEffect } from "react";

import { Container } from "@/components";
import { HomeExplore, HomeHero, TechnologyGrid } from "@/features/home/components";
import {
    codeLines,
    floatingLabels,
    heroTechnologies,
    homeHeroContent,
} from "@/features/home/data/homeHero";
import {
    homeCtaContent,
    homeExploreContent,
} from "@/features/home/data/homeSections";
import { ProjectCta } from "@/features/projects/components/ProjectCta";

import styles from "./HomePage.module.css";

export function HomePage() {
    const exploreRef = useRef(null);

    useEffect(() => {
        document.title = "Portfolio";
    }, []);

    const handleExploreClick = () => {
        exploreRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div className={styles.page}>
            <HomeHero
                codeLines={codeLines}
                content={homeHeroContent}
                floatingLabels={floatingLabels}
                onExploreClick={handleExploreClick}
                technologies={heroTechnologies}
            />

            <Container className={styles.container}>
                <div ref={exploreRef}>
                    <HomeExplore content={homeExploreContent} />
                </div>
                <TechnologyGrid />
                <Container className={styles.container} size="wide">
                    <ProjectCta
                        primaryLabel={homeCtaContent.primaryLabel}
                        secondaryLabel={homeCtaContent.secondaryLabel}
                        subtitle={homeCtaContent.subtitle}
                        title={homeCtaContent.title}
                    />
                </Container>
            </Container>
        </div>
    );
}
