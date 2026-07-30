import { Card, Heading, Text } from '@/components'

import { GlassCard } from '../GlassCard'

import styles from './AboutWorkspace.module.css'

export function AboutWorkspace({ facts, stats, title }) {
    return (
        <section className={styles.workspace}>
            <Heading level={2}>{title}</Heading>
            <Card
                as="div"
                className={styles.workspaceCard}
                padding="none"
                radius="md"
            >
                <div className={styles.mockup}>
                    <span />
                    <span />
                    <span />
                </div>
                <div className={styles.stats}>
                    {stats.slice(0, 2).map((stat) => (
                        <GlassCard className={styles.statCard} key={stat.label}>
                            <strong>{stat.value}</strong>
                            <Text size="xs">{stat.label}</Text>
                        </GlassCard>
                    ))}
                </div>
            </Card>
            <div className={styles.facts}>
                {facts.slice(0, 4).map((fact) => (
                    <GlassCard key={fact.text}>
                        <strong>{fact.text}</strong>
                    </GlassCard>
                ))}
            </div>
        </section>
    )
}
