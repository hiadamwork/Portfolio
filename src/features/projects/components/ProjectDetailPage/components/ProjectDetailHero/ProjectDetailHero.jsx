import { Badge, Button, Heading, Text } from '@/components'
import { ProjectMockup } from '@/features/projects/components/ProjectMockup'

import styles from './ProjectDetailHero.module.css'

export function ProjectDetailHero({ project }) {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <Heading level={1}>{project.title}</Heading>
                <Text>{project.description}</Text>
                <div className={styles.tags}>
                    {project.tags.map((tag) => (
                        <Badge key={tag} tone={tag === 'JWT' ? 'red' : 'blue'}>
                            {tag}
                        </Badge>
                    ))}
                </div>
                <div className={styles.actions}>
                    <Button as="a" href={project.liveUrl || '#'}>
                        Live Demo
                    </Button>
                    <Button
                        as="a"
                        href={project.githubUrl || '#'}
                        variant="secondary"
                    >
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
    )
}
