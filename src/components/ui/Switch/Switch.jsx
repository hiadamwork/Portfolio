import { cx } from '@/utils/cx'

import styles from './Switch.module.css'

export function Switch({ children, className, ...props }) {
    return (
        <label className={cx(styles.switch, className)}>
            <input type="checkbox" {...props} />
            <span className={styles.track} aria-hidden="true" />
            {children ? <span>{children}</span> : null}
        </label>
    )
}
