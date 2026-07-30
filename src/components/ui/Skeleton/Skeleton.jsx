import { cx } from '@/utils/cx'

import styles from './Skeleton.module.css'

export function Skeleton({ className, radius = 'md', ...props }) {
    return (
        <span
            aria-hidden="true"
            className={cx(styles.skeleton, styles[radius], className)}
            {...props}
        />
    )
}
