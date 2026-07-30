import { Link } from 'react-router-dom'

import { Button, Heading, Text } from '@/components'
import { cx } from '@/utils/cx'
import styles from './ProjectCta.module.css'

export function ProjectCta({
    primaryHref = '/contact',
    primaryLabel = 'Start a Project',
    secondaryHref = '/contact',
    secondaryLabel = 'Contact Me',
    size = 'default',
    subtitle = "Let's create something exceptional together.",
    title = "Have an idea? Let's build something amazing together.",
}) {
    return (
        <section className={cx(styles.cta, styles[size])}>
            <div className={styles.glow} />
            <Heading level={2}>{title}</Heading>
            <Text>{subtitle}</Text>
            <div className={styles.actions}>
                <Button as={Link} to={primaryHref} size="sm" variant="secondary">
                    {primaryLabel}
                </Button>
                <Button as={Link} to={secondaryHref} size="sm" variant="ghost">
                    {secondaryLabel}
                </Button>
            </div>
        </section>
    )
}
