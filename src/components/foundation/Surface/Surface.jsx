import { cx } from '@/utils/cx'

import styles from './Surface.module.css'

export function Surface({
    as: Component = 'div',
    children,
    className,
    interactive = false,
    padding = 'md',
    radius = 'lg',
    variant = 'glass',
    ...props
}) {
    return (
        <Component
            className={cx(
                styles.surface,
                styles[variant],
                styles[`padding-${padding}`],
                styles[`radius-${radius}`],
                interactive && styles.interactive,
                className,
            )}
            {...props}
        >
            {children}
        </Component>
    )
}
