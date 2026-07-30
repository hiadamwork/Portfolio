import { Card, Heading, Text } from '@/components'
import { cx } from '@/utils/cx'

import styles from './ProjectChallenges.module.css'

export function ProjectChallenges({ compact = false, project }) {
    const challenges = compact
        ? project.challenges.slice(0, 3)
        : project.challenges

    return (
        <section className={cx(styles.challenges, compact && styles.compact)}>
            <Heading level={2}>Challenges</Heading>
            <div className={styles.challengeGrid}>
                {challenges.map((card) => (
                    <Card
                        className={styles.challengeCard}
                        key={card.title}
                        padding="none"
                        radius="md"
                    >
                        <Heading level={3} size="h6">
                            {card.title}
                        </Heading>
                        <Text size="xs">{card.description}</Text>
                        <span>{card.label}</span>
                    </Card>
                ))}
            </div>
        </section>
    )
}
