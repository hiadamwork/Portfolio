import { EmptyState } from '@/components'
import { ProjectCard } from '@/features/projects/components/ProjectCard'

import styles from './ProjectsGrid.module.css'

export function ProjectsGrid({ content, projects }) {
    return (
        <section className={styles.projectGrid} aria-label={content.ariaLabel}>
            {projects.length > 0 ? (
                projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))
            ) : (
                <EmptyState
                    className={styles.emptyState}
                    description={content.emptyDescription}
                    title={content.emptyTitle}
                />
            )}
        </section>
    )
}
