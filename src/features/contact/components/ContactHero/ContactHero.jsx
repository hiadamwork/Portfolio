import { Link } from 'react-router-dom'

import { Button, Heading, Text } from '@/components'

import styles from './ContactHero.module.css'

export function ContactHero({ content }) {
    return (
        <section className={styles.introText}>
            <Heading level={1}>{content.title}</Heading>
            <Text className={styles.lead} size="lg">
                {content.lead}
            </Text>
            <Text>{content.description}</Text>
            <div className={styles.actions}>
                <Button as="a" href={content.primaryAction.href}>
                    {content.primaryAction.label}
                </Button>
                <Button
                    as={Link}
                    to={content.secondaryAction.href}
                    variant="secondary"
                >
                    {content.secondaryAction.label}
                </Button>
            </div>
            <span className={styles.availabilityBadge}>
                <span />
                {content.availability}
            </span>
        </section>
    )
}
