import { Badge, Heading } from '@/components'

import styles from './AboutTechStack.module.css'

export function AboutTechStack({ items, title }) {
    return (
        <section className={styles.section}>
            <Heading level={2}>{title}</Heading>
            <div className={styles.pills}>
                {items.map((item) => (
                    <Badge
                        key={item}
                        tone={item.includes('Java') ? 'yellow' : 'blue'}
                    >
                        {item}
                    </Badge>
                ))}
            </div>
        </section>
    )
}
