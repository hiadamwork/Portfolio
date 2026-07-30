import { cx } from '@/utils/cx'

import styles from './Spinner.module.css'

export function Spinner({ className, label = 'Loading', size = 'md' }) {
    return (
        <span
            aria-label={label}
            className={cx(styles.spinner, styles[size], className)}
            role="status"
        />
    )
}
