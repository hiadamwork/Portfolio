import { Badge } from '@/components'

import styles from './TechStackPills.module.css'

export function TechStackPills({ items }) {
    return (
        <section className={styles.stackSection}>
            <div className={styles.stackPills}>
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
