import { cx } from '@/utils/cx'

import styles from './Chip.module.css'

export function Chip({
    as: Component = 'span',
    children,
    className,
    size = 'sm',
    tone = 'neutral',
    ...props
}) {
    return (
        <Component
            className={cx(styles.chip, styles[size], styles[tone], className)}
            {...props}
        >
            {children}
        </Component>
    )
}
