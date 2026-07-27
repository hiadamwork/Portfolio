import { useState } from "react";

import { Badge, Button, Container } from "@/components/ui";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { ProjectCta } from "@/features/projects/components/ProjectCta";
import { ProjectMockup } from "@/features/projects/components/ProjectMockup";
import {
    newProject,
    processSteps,
    projectFilters,
    projects,
    projectStats,
    stackPills,
} from "@/features/projects/data/projects";

import styles from "./ProjectsPage.module.css";

function SectionHeader({ eyebrow, title, description }) {
    return (
        <div className={styles.sectionHeader}>
            {eyebrow && <span>{eyebrow}</span>}
            <h2>{title}</h2>
            {description && <p>{description}</p>}
        </div>
    );
}

function FeaturedShowcase() {
    return (
        <article className={styles.featuredCard}>
            <div className={styles.featuredContent}>
                <h2>{newProject.shortTitle}</h2>
                <p>
                    Full-stack software developer specializing in React, modern
                    backend systems and scalable architecture.
                </p>
                <div className={styles.tagList}>
                    {newProject.tags.slice(0, 5).map((tag) => (
                        <Badge key={tag} tone={tag === "JWT" ? "red" : "blue"}>
                            {tag}
                        </Badge>
                    ))}
                </div>
                <div className={styles.cardActions}>
                    <Button as="a" href="#" size="sm">
                        Live Demo
                    </Button>
                    <Button as="a" href="#" size="sm" variant="secondary">
                        GitHub
                    </Button>
                    <Button
                        as="a"
                        href="/projects/#ai-project-management-platform"
                        size="sm"
                        variant="secondary"
                    >
                        Case Study
                    </Button>
                </div>
            </div>
            <ProjectMockup className={styles.featuredMockup} />
        </article>
    );
}

function CaseStudyPreview() {
    return (
        <section className={styles.caseStudy}>
            <SectionHeader eyebrow="Case Study" title="How I build software." />
            <div className={styles.processGrid}>
                {processSteps.map((step, index) => (
                    <article className={styles.processCard} key={step.title}>
                        <span className={styles.processIcon}>{index + 1}</span>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

function GithubPreview() {
    return (
        <section className={styles.githubGrid}>
            <article className={styles.githubCard}>
                <h3>Contribution preview</h3>
                <p>
                    Adam pushed production-ready improvements to dashboard
                    cards.
                </p>
                <a href="https://github.com" rel="noreferrer" target="_blank">
                    View contribution preview
                </a>
            </article>
            <article className={styles.githubCard}>
                <h3>Repository</h3>
                <ul>
                    <li>modern-cards</li>
                    <li>reusable-components</li>
                    <li>contribution-graph</li>
                </ul>
            </article>
            <article className={styles.githubCard}>
                <h3>Latest commits</h3>
                <div className={styles.commitGraph}>
                    {Array.from({ length: 35 }).map((_, index) => (
                        <span
                            key={index}
                            style={{ "--height": `${28 + (index % 7) * 10}%` }}
                        />
                    ))}
                </div>
            </article>
        </section>
    );
}

export function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const visibleProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((project) =>
                  project.categories.includes(activeFilter),
              );

    return (
        <div className={styles.page}>
            <div className={styles.gridBackground} />
            <div className={styles.leftGlow} />
            <div className={styles.rightGlow} />

            <Container className={styles.container} size="wide">
                <header className={styles.hero}>
                    <h1>Featured Projects</h1>
                    <p>
                        A collection of carefully crafted applications focused
                        on performance, user experience and scalable
                        architecture.
                    </p>
                    <div className={styles.stats}>
                        {projectStats.map((stat) => (
                            <div className={styles.stat} key={stat.label}>
                                <strong>{stat.value}</strong>
                                <span>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </header>

                <div className={styles.mainGrid}>
                    <div className={styles.leftColumn}>
                        <FeaturedShowcase /> 

                        <div
                            className={styles.filters}
                            aria-label="Project filters"
                        >
                            {projectFilters.map((filter) => (
                                <button
                                    className={
                                        filter === activeFilter
                                            ? styles.activeFilter
                                            : styles.filter
                                    }
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    type="button"
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        <section
                            className={styles.projectGrid}
                            aria-label="Project cards"
                        >
                            {visibleProjects.map((project) => (
                                <ProjectCard
                                    key={project.slug}
                                    project={project}
                                />
                            ))}
                        </section>
                    </div>

                    <aside className={styles.rightColumn}>
                        <CaseStudyPreview />

                        <section className={styles.stackSection}>
                            <div className={styles.stackPills}>
                                {stackPills.map((item) => (
                                    <Badge
                                        key={item}
                                        tone={
                                            item.includes("Java")
                                                ? "yellow"
                                                : "blue"
                                        }
                                    >
                                        {item}
                                    </Badge>
                                ))}
                            </div>
                        </section>

                        <GithubPreview />

                        <ProjectCta />
                    </aside>
                </div>
            </Container>
        </div>
    );
}
