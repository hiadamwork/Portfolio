import { cx } from '@/utils/cx'

import styles from './Badge.module.css'

export function Badge({ children, className, tone = 'neutral' }) {
    return (
        <span className={cx(styles.badge, styles[tone], className)}>
            {children}
        </span>
    )
}
