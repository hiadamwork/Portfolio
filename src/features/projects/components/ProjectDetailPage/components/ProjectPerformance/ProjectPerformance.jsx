import { Card, Heading } from '@/components'

import styles from './ProjectPerformance.module.css'

export function ProjectPerformance({ project }) {
    return (
        <section className={styles.performance}>
            <Heading level={2}>Performance Metrics Dashboard</Heading>
            <div className={styles.performanceGrid}>
                {project.performance.map((metric) => (
                    <Card
                        className={styles.metricCard}
                        key={metric.label}
                        padding="none"
                        radius="md"
                    >
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                    </Card>
                ))}
            </div>
        </section>
    )
}
