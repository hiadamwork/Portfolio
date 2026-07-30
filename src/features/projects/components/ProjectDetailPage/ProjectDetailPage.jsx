import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Container, EmptyState, PageLayout } from '@/components'
import { ProjectCta } from '@/features/projects/components/ProjectCta'
import {
    ArchitectureSection,
    ProjectChallenges,
    ProjectDetailHero,
    ProjectInfoGrid,
    ProjectOverview,
    ProjectPerformance,
    ProjectScreenshots,
    ProjectTechStack,
    ProjectTimeline,
    ProjectVideoPreview,
    RelatedProjects,
} from '@/features/projects/components/ProjectDetailPage/components'
import {
    getProjectBySlug,
    getRelatedProjects,
} from '@/features/projects/data/projects'

import styles from './ProjectDetailPage.module.css'

export function ProjectDetailPage() {
    const { slug } = useParams()
    const project = getProjectBySlug(slug)

    useEffect(() => {
        document.title = `Portfolio | Project - ${project ? project.title : 'Not Found'}`
    }, [project])

    if (!project) {
        return (
            <Container className={styles.notFound} size="default">
                <EmptyState
                    action="Back to Projects"
                    actionHref="/projects"
                    description="The project you are looking for does not exist."
                    title="Project not found"
                />
            </Container>
        )
    }

    return (
        <div className={styles.page}>
            <div className={styles.gridBackground} />
            <div className={styles.leftGlow} />
            <div className={styles.rightGlow} />

            <Container className={styles.container} size="wide">
                <PageLayout columns="services" gap="default" id="overview">
                    <PageLayout.Main>
                        <ProjectDetailHero project={project} />
                        <ProjectInfoGrid project={project} />
                        <ProjectOverview project={project} />
                    </PageLayout.Main>

                    <PageLayout.Sidebar>
                        <ArchitectureSection project={project} />
                        <ProjectScreenshots project={project} />
                        <ProjectTechStack project={project} />
                        <ProjectTimeline project={project} />
                        <ProjectChallenges project={project} />
                    </PageLayout.Sidebar>

                    <PageLayout.Aside>
                        <ProjectChallenges project={project} compact />
                        <ProjectPerformance project={project} />
                        <ProjectVideoPreview />
                        <RelatedProjects
                            projects={getRelatedProjects(project)}
                        />
                        <ProjectCta
                            size="compact"
                            title="Interested in a similar project?"
                            subtitle="Let's create something exceptional together."
                        />
                    </PageLayout.Aside>
                </PageLayout>
            </Container>
        </div>
    )
}
