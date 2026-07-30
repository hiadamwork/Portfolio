import { Heading, Text } from '@/components'

import { GlassCard } from '../GlassCard'

import styles from './CardGridSection.module.css'

export function CardGridSection({ items, title, variant = 'default' }) {
    return (
        <section className={styles.section}>
            <Heading level={2}>{title}</Heading>
            <div className={styles[variant]}>
                {items.map((item) => (
                    <GlassCard icon={item.icon} key={item.label || item.title}>
                        <strong>{item.label || item.title}</strong>
                        {item.description ? (
                            <Text size="xs">{item.description}</Text>
                        ) : null}
                    </GlassCard>
                ))}
            </div>
        </section>
    )
}
