import { cx } from '@/utils/cx'

import styles from './Progress.module.css'

export function Progress({ className, label, max = 100, value = 0 }) {
    const percent = Math.min(100, Math.max(0, (value / max) * 100))

    return (
        <div className={cx(styles.progress, className)}>
            {label ? <span className={styles.label}>{label}</span> : null}
            <div
                aria-label={label}
                aria-valuemax={max}
                aria-valuemin={0}
                aria-valuenow={value}
                className={styles.track}
                role="progressbar"
            >
                <span className={styles.bar} style={{ width: `${percent}%` }} />
            </div>
        </div>
    )
}
