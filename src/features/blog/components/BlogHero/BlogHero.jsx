import { Badge, Button, Heading, Text } from '@/components'

import styles from './BlogHero.module.css'

export function BlogHero({ content }) {
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
                <Button as="a" href={content.primaryAction.href}>
                    {content.primaryAction.label}
                </Button>
                <Button as="a" href={content.secondaryAction.href} variant="secondary">
                    {content.secondaryAction.label}
                </Button>
                <Badge className={styles.updatedBadge} tone="blue">
                    <span className={styles.statusDot} />
                    {content.status}
                </Badge>
            </div>
        </header>
    )
}
