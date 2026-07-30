import { cx } from '@/utils/cx'

import styles from './Avatar.module.css'

export function Avatar({ alt = '', className, initials, size = 'md', src, tone = 'blue' }) {
    if (src) {
        return (
            <img
                alt={alt}
                className={cx(styles.avatar, styles[size], className)}
                src={src}
            />
        )
    }

    return (
        <span
            aria-label={alt || initials}
            className={cx(styles.avatar, styles[size], styles[tone], className)}
            role={alt ? 'img' : undefined}
        >
            {initials}
        </span>
    )
}
