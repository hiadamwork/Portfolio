import { Link } from 'react-router-dom'

import { Badge, Button, Heading, Text } from '@/components'
import { buildProjectDetailPath } from '@/app/router/routes'
import { ProjectMockup } from '@/features/projects/components/ProjectMockup'

import styles from './FeaturedProjectShowcase.module.css'

export function FeaturedProjectShowcase({ content, project }) {
    return (
        <article className={`${styles.featuredCard} glowBorder`}>
            <div className={styles.featuredContent}>
                <Heading level={2}>{project.shortTitle}</Heading>
                <Text>{content.description}</Text>
                <div className={styles.tagList}>
                    {project.tags.slice(0, 5).map((tag) => (
                        <Badge key={tag} tone={tag === 'JWT' ? 'red' : 'blue'}>
                            {tag}
                        </Badge>
                    ))}
                </div>
                <div className={styles.cardActions}>
                    <Button as="a" href={project.liveUrl || '#'} size="sm">
                        {content.actions.live}
                    </Button>
                    <Button
                        as="a"
                        href={project.githubUrl || '#'}
                        size="sm"
                        variant="secondary"
                    >
                        {content.actions.github}
                    </Button>
                    <Button
                        as={Link}
                        size="sm"
                        to={buildProjectDetailPath(project.slug)}
                        variant="secondary"
                    >
                        {content.actions.caseStudy}
                    </Button>
                </div>
            </div>
            <ProjectMockup className={styles.featuredMockup} />
        </article>
    )
}
