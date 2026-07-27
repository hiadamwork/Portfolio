import { cx } from '@/utils/cx'

import styles from './ProjectMockup.module.css'

export function ProjectMockup({ className, compact = false, variant = 'analytics' }) {
    return (
        <div className={cx(styles.mockup, compact && styles.compact, styles[variant], className)}>
            <div className={styles.sidebar}>
                <span />
                <span />
                <span />
                <span />
            </div>
            <div className={styles.screen}>
                <div className={styles.topbar}>
                    <span />
                    <span />
                    <span />
                </div>
                <div className={styles.metrics}>
                    <span />
                    <span />
                    <span />
                </div>
                <div className={styles.chart}>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <div className={styles.rows}>
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </div>
    )
}
