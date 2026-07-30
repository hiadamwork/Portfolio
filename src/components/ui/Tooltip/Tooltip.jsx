import { cx } from '@/utils/cx'

import styles from './Tooltip.module.css'

export function Tooltip({ children, className, content }) {
    return (
        <span className={cx(styles.tooltip, className)}>
            {children}
            <span className={styles.bubble} role="tooltip">
                {content}
            </span>
        </span>
    )
}
