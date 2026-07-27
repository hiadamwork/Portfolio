import { Badge, Button, Container } from "@/components/ui";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { ProjectCta } from "@/features/projects/components/ProjectCta";
import { ProjectMockup } from "@/features/projects/components/ProjectMockup";
import {
    getProjectBySlug,
    projects,
} from "@/features/projects/data/projects";

import styles from "./ProjectDetailPage.module.css";

function InfoGrid({ project }) {
    const projectInfo = [
        { label: "Role", value: project.role },
        { label: "Duration", value: project.duration },
        { label: "Platform", value: project.platform },
        { label: "Status", value: project.status },
    ];

    return (
        <section className={styles.infoGrid} aria-label="Project information">
            {projectInfo.map((item) => (
                <article className={styles.infoCard} key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                </article>
            ))}
        </section>
    );
}

function Overview({ project }) {
    const projectFeatures = project.features.map((feature) => ({
        title: feature,
        description: `A core capability built into ${project.title}.`,
    }));

    return (
        <section className={styles.overview}>
            <div>
                <h2>Project Overview</h2>
                <article>
                    <h3>Problem</h3>
                    <p>{project.overview.problem}</p>
                </article>
                <article>
                    <h3>Solution</h3>
                    <p>{project.overview.solution}</p>
                </article>
                <article>
                    <h3>Goals</h3>
                    <p>{project.overview.goals}</p>
                </article>
                <article>
                    <h3>Result</h3>
                    <p>{project.overview.result}</p>
                </article>
            </div>

            <div>
                <h2>Features</h2>
                <div className={styles.featureGrid}>
                    {projectFeatures.map((feature) => (
                        <article
                            className={styles.featureCard}
                            key={feature.title}
                        >
                            <span className={styles.featureIcon} />
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Architecture({ project }) {
    return (
        <section className={styles.architecture}>
            <h2>Architecture</h2>
            <div className={styles.architectureFlow}>
                {project.architecture.map((node, index) => (
                    <div className={styles.architectureItem} key={node}>
                        <span className={styles.nodeIcon}>{index + 1}</span>
                        <strong>{node}</strong>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Screenshots({ project }) {
    return (
        <section className={styles.gallery}>
            <h2>Screenshots Gallery</h2>
            <div className={styles.galleryTrack}>
                <ProjectMockup compact variant={project.variant} />
                <ProjectMockup compact variant="commerce" />
                <ProjectMockup compact variant="terminal" />
            </div>
        </section>
    );
}

function TechStack({ project }) {
    return (
        <section className={styles.techStack}>
            <h2>Tech Stack</h2>
            <div className={styles.stackGroups}>
                {project.techStack.map((group) => (
                    <div className={styles.stackGroup} key={group.label}>
                        <span>{group.label}</span>
                        <div>
                            {group.items.map((item) => (
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
                    </div>
                ))}
            </div>
        </section>
    );
}

function Timeline({ project }) {
    return (
        <section className={styles.timeline}>
            <h2>Development Process</h2>
            <div className={styles.timelineList}>
                {project.timeline.map((step) => (
                    <span key={step}>{step}</span>
                ))}
            </div>
        </section>
    );
}

function Challenges({ project }) {
    return (
        <section className={styles.challenges}>
            <h2>Challenges & Solutions</h2>
            <div className={styles.challengeGrid}>
                {project.challenges.map((card) => (
                    <article className={styles.challengeCard} key={card.title}>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <span>{card.label}</span>
                    </article>
                ))}
            </div>
        </section>
    );
}

function Performance({ project }) {
    return (
        <section className={styles.performance}>
            <h2>Performance Metrics Dashboard</h2>
            <div className={styles.performanceGrid}>
                {project.performance.map((metric) => (
                    <article className={styles.metricCard} key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                    </article>
                ))}
            </div>
        </section>
    );
}

function VideoPreview() {
    return (
        <section className={styles.videoSection}>
            <h2>Project Video</h2>
            <div className={styles.videoCard}>
                <span className={styles.playButton}>▶</span>
            </div>
        </section>
    );
}

export function ProjectDetailPage({ slug }) {
    const project = getProjectBySlug(slug);

    return (
        <div className={styles.page}>
            <div className={styles.gridBackground} />
            <div className={styles.leftGlow} />
            <div className={styles.rightGlow} />

            <Container className={styles.container} size="wide">
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <div className={styles.tags}>
                            {project.tags.map((tag) => (
                                <Badge
                                    key={tag}
                                    tone={tag === "JWT" ? "red" : "blue"}
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <div className={styles.actions}>
                            <Button as="a" href="#">
                                Live Demo
                            </Button>
                            <Button as="a" href="#" variant="secondary">
                                GitHub
                            </Button>
                            <Button as="a" href="#overview" variant="secondary">
                                View Case Study
                            </Button>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <span className={styles.floatReact}>React</span>
                        <span className={styles.floatApi}>API</span>
                        <span className={styles.floatRest}>REST</span>
                        <ProjectMockup variant={project.variant} />
                    </div>
                </section>

                <InfoGrid project={project} />

                <div className={styles.detailGrid} id="overview">
                    <div className={styles.primaryColumn}>
                        <Overview project={project} />
                    </div>

                    <aside className={styles.sideColumn}>
                        <Architecture project={project} />
                        <Screenshots project={project} />
                        <TechStack project={project} />
                        <Timeline project={project} />
                    </aside>
                </div>

                <div className={styles.bottomGrid}>
                    <div>
                        <Challenges project={project} />
                    </div>
                    <aside className={styles.sideColumn}>
                        <Performance project={project} />
                        <VideoPreview />
                        <section className={styles.related}>
                            <h2>Related Projects</h2>
                            <div className={styles.relatedGrid}>
                                {projects.slice(0, 3).map((project) => (
                                    <ProjectCard
                                        key={project.slug}
                                        project={project}
                                    />
                                ))}
                            </div>
                        </section>
                        <ProjectCta
                            title="Interested in a similar project?"
                            subtitle="Let's create something exceptional together."
                        />
                    </aside>
                </div>
            </Container>
        </div>
    );
}
