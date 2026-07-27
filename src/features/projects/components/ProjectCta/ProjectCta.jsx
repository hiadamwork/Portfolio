import { Button } from '@/components/ui'

import styles from './ProjectCta.module.css'

export function ProjectCta({
    subtitle = "Let's create something exceptional together.",
    title = "Have an idea? Let's build something amazing together.",
}) {
    return (
        <section className={styles.cta}>
            <div className={styles.glow} />
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <div className={styles.actions}>
                <Button as="a" href="/contact" size="sm" variant="secondary">
                    Start a Project
                </Button>
                <Button as="a" href="/contact" size="sm" variant="ghost">
                    Contact Me
                </Button>
            </div>
        </section>
    )
}
