import { Link } from "react-router-dom";

import { Button, Container, Grid, Heading, Text } from '@/components'
import { ProjectCard } from '@/features/projects/components'
import { getProjectBySlug } from "@/features/projects/data/projects";
import { featuredProjectSlugs } from "@/features/home/data/homeSections";

import styles from "./FeaturedProjects.module.css";

export function FeaturedProjects() {
    const featuredProjects = featuredProjectSlugs
        .map((slug) => getProjectBySlug(slug))
        .filter(Boolean);

    return (
        <section className={styles.section} aria-labelledby="featured-projects-title">
            <Container className={styles.container} size="wide">
                <div className={styles.header}>
                    <div>
                        <Text className={styles.eyebrow} size="sm">
                            Selected Work
                        </Text>
                        <Heading id="featured-projects-title" level={2}>
                            Featured Projects
                        </Heading>
                        <Text className={styles.description}>
                            A snapshot of recent builds across frontend
                            interfaces, backend systems and full-stack
                            products.
                        </Text>
                    </div>
                    <Button as={Link} to="/projects" variant="secondary">
                        View All Projects
                    </Button>
                </div>

                <Grid columns={3} gap="md">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </Grid>
            </Container>
        </section>
    );
}
