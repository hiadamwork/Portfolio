import { Heading } from '@/components'
import { ProjectCta } from '@/features/projects/components/ProjectCta'

import { GlassCard } from '../GlassCard'
import styles from './AboutQuote.module.css'

export function AboutQuote({ cta, focusItems, quote, title }) {
    return (
        <>
            <blockquote className={styles.quote}>{quote}</blockquote>
            <section className={styles.focusPanel}>
                <Heading level={2}>{title}</Heading>
                <div className={styles.focusGrid}>
                    {focusItems.slice(0, 5).map((item) => (
                        <GlassCard key={item}>
                            <strong>{item}</strong>
                        </GlassCard>
                    ))}
                    <GlassCard>
                        <strong>No More</strong>
                    </GlassCard>
                </div>
            </section>
            <ProjectCta
                primaryLabel={cta.primaryLabel}
                secondaryHref={cta.secondaryHref}
                secondaryLabel={cta.secondaryLabel}
                size="compact"
                subtitle={cta.subtitle}
                title={cta.title}
            />
        </>
    )
}
