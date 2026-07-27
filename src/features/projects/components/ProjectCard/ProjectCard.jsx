import { Badge, Button } from '@/components/ui'
import { ProjectMockup } from '@/features/projects/components/ProjectMockup'

import styles from './ProjectCard.module.css'

export function ProjectCard({ project }) {
    return (
        <article className={styles.card}>
            <ProjectMockup compact variant={project.variant} />

            <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>

            <div className={styles.tags}>
                {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} tone={tag.includes('Java') ? 'yellow' : 'blue'}>
                        {tag}
                    </Badge>
                ))}
            </div>

            <div className={styles.actions}>
                <Button as="a" href="#" size="sm">
                    Live
                </Button>
                <Button as="a" href="#" size="sm" variant="secondary">
                    GitHub
                </Button>
                <Button as="a" href={`/projects/#${project.slug}`} size="sm" variant="secondary">
                    Case Study
                </Button>
            </div>
        </article>
    )
}
