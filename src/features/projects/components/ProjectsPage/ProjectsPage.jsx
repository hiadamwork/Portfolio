import { useEffect } from "react";
import { Container, PageLayout } from "@/components";
import { ProjectCta } from "@/features/projects/components/ProjectCta";
import {
    CaseStudyPreview,
    FeaturedProjectShowcase,
    GithubPreview,
    ProjectFilters,
    ProjectsGrid,
    ProjectsHero,
    TechStackPills,
} from "@/features/projects/components/ProjectsPage/components";
import {
    newProject,
    processSteps,
    projectFilters,
    projects,
    projectsPageContent,
    projectStats,
    stackPills,
} from "@/features/projects/data/projects";
import { useProjectFilters } from "@/features/projects/hooks";

import styles from "./ProjectsPage.module.css";

export function ProjectsPage() {
    const projectFilter = useProjectFilters(projects);

    useEffect(() => {
        document.title = "Portfolio | Projects";
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.gridBackground} />
            <div className={styles.leftGlow} />
            <div className={styles.rightGlow} />

            <Container className={styles.container} size="wide">
                <PageLayout columns="two" gap="wide">
                    <PageLayout.Main>
                        <ProjectsHero
                            content={projectsPageContent.hero}
                            stats={projectStats}
                        />
                        <FeaturedProjectShowcase
                            content={projectsPageContent.featured}
                            project={newProject}
                        />

                        <ProjectFilters
                            activeFilter={projectFilter.activeFilter}
                            content={projectsPageContent.filters}
                            filters={projectFilters}
                            query={projectFilter.query}
                            onFilterChange={projectFilter.setActiveFilter}
                            onQueryChange={projectFilter.setQuery}
                        />

                        <ProjectsGrid
                            content={projectsPageContent.grid}
                            projects={projectFilter.visibleProjects}
                        />
                    </PageLayout.Main>

                    <PageLayout.Sidebar>
                        <CaseStudyPreview
                            content={projectsPageContent.caseStudy}
                            processSteps={processSteps}
                        />

                        <TechStackPills items={stackPills} />

                        <GithubPreview content={projectsPageContent.github} />

                        <ProjectCta />
                    </PageLayout.Sidebar>
                </PageLayout>
            </Container>
        </div>
    );
}
