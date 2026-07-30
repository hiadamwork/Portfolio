import { Heading } from '@/components'
import { ProjectCard } from '@/features/projects/components/ProjectCard'

import styles from './RelatedProjects.module.css'

export function RelatedProjects({ projects }) {
    return (
        <section className={styles.related}>
            <Heading level={2}>Related Projects</Heading>
            <div className={styles.relatedGrid}>
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    )
}
