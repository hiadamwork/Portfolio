import { cx } from '@/utils/cx'

import styles from './Container.module.css'

export function Container({ children, className, size = 'default' }) {
    return (
        <div className={cx(styles.container, styles[size], className)}>
            {children}
        </div>
    )
}
