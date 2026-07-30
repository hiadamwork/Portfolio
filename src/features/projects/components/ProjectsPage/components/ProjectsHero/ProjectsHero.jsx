import { Heading, Text } from '@/components'

import styles from './ProjectsHero.module.css'

export function ProjectsHero({ content, stats }) {
    return (
        <header className={styles.hero}>
            <Heading level={1} size="h1">
                {content.title}
            </Heading>
            <Text className={styles.description} size="sm">
                {content.description}
            </Text>
            <div className={styles.stats}>
                {stats.map((stat) => (
                    <div className={styles.stat} key={stat.label}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                    </div>
                ))}
            </div>
        </header>
    )
}
