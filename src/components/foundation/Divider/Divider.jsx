import { cx } from '@/utils/cx'

import styles from './Divider.module.css'

export function Divider({ className, orientation = 'horizontal' }) {
    return (
        <span
            aria-hidden="true"
            className={cx(styles.divider, styles[orientation], className)}
        />
    )
}
