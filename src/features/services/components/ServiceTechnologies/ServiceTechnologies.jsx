import { Badge, Heading } from '@/components'

import styles from './ServiceTechnologies.module.css'

export function ServiceTechnologies({ content, groups }) {
    const technologies = groups.flatMap((group) => group.items)

    return (
        <section className={styles.technologiesSection}>
            <Heading level={2}>{content.title}</Heading>
            <div className={styles.technologyPills}>
                {technologies.slice(0, 5).map((item) => (
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
