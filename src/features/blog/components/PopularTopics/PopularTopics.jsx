import { Badge, Heading } from '@/components'

import styles from './PopularTopics.module.css'

const TOPIC_TONES = ['cyan', 'yellow', 'blue', 'red', 'green']

export function PopularTopics({ content, topics }) {
    return (
        <section className={styles.section}>
            <Heading level={2} size="h6">
                {content.title}
            </Heading>
            <div className={styles.pills}>
                {topics.map((topic, index) => (
                    <Badge key={topic} tone={TOPIC_TONES[index % TOPIC_TONES.length]}>
                        {topic}
                    </Badge>
                ))}
            </div>
        </section>
    )
}
