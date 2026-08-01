import { Link } from 'react-router-dom'

import { Badge, Button, Card, Heading, Text } from '@/components'
import { ProjectMockup } from '@/features/projects/components/ProjectMockup'
import { buildProjectDetailPath } from '@/app/router/routes'
import { cx } from '@/utils/cx'

import styles from './ProjectCard.module.css'

export function ProjectCard({ compact = false, project }) {
    return (
        <Card
            className={cx(styles.card, compact && styles.compact)}
            interactive
            padding="none"
            radius={compact ? 'md' : 'lg'}
        >
            <ProjectMockup compact variant={project.variant} />

            <div className={styles.content}>
                <Heading level={3} size="h6">
                    {compact ? project.shortTitle : project.title}
                </Heading>
                <Text size="sm">{project.description}</Text>
            </div>

            <div className={styles.tags}>
                {project.tags.slice(0, compact ? 2 : 3).map((tag) => (
                    <Badge key={tag} tone={tag.includes('Java') ? 'yellow' : 'blue'}>
                        {tag}
                    </Badge>
                ))}
            </div>

            <div className={styles.actions}>
                <Button
                    as="a"
                    className={compact ? styles.compactButton : undefined}
                    href={project.liveUrl || '#'}
                    size="sm"
                    target="_blank"
                >
                    Live
                </Button>
                {!compact ? (
                    <Button as="a" href={project.githubUrl || '#'} size="sm" variant="secondary">
                    GitHub
                    </Button>
                ) : null}
                <Button
                    as={Link}
                    className={compact ? styles.compactButton : undefined}
                    to={buildProjectDetailPath(project.slug)}
                    size="sm"
                    variant="secondary"
                >
                    Case Study
                </Button>
            </div>
        </Card>
    )
}
