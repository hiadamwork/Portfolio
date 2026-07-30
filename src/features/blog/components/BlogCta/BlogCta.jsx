import { Link } from 'react-router-dom'

import { Button, Heading, Text } from '@/components'

import styles from './BlogCta.module.css'

export function BlogCta({ content }) {
    return (
        <section className={styles.cta}>
            <Heading level={2} size="h5" align="center">
                {content.title}
            </Heading>
            <Text align="center" color="primary" size="sm">
                {content.description}
            </Text>
            <div className={styles.actions}>
                <Button
                    as={Link}
                    size="sm"
                    to={content.primaryAction.href}
                    variant="secondary"
                >
                    {content.primaryAction.label}
                </Button>
                <Button
                    as={Link}
                    size="sm"
                    to={content.secondaryAction.href}
                    variant="ghost"
                >
                    {content.secondaryAction.label}
                </Button>
            </div>
        </section>
    )
}
