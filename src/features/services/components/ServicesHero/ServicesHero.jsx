import { Link } from 'react-router-dom'
import { Badge, Button, Heading, Text } from '@/components'

import styles from './ServicesHero.module.css'

export function ServicesHero({ content }) {
    return (
        <header className={styles.hero}>
            <Heading level={1} size="h1">
                {content.title}
            </Heading>
            <Text className={styles.lead} color="primary" size="lg">
                {content.lead}
            </Text>
            <Text className={styles.description} size="sm">
                {content.description}
            </Text>
            <div className={styles.actions}>
                <Button as={Link} to={content.primaryAction.href}>
                    {content.primaryAction.label}
                </Button>
                <Button
                    as={Link}
                    to={content.secondaryAction.href}
                    variant="secondary"
                >
                    {content.secondaryAction.label}
                </Button>
                <Badge className={styles.availabilityBadge}>
                    <span />
                    {content.availability}
                </Badge>
            </div>
        </header>
    )
}
