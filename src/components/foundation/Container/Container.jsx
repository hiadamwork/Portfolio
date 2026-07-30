import { cx } from '@/utils/cx'

import styles from './Container.module.css'

export function Container({
    as: Component = 'div',
    center = true,
    children,
    className,
    padding = 'md',
    size = 'default',
    ...props
}) {
    return (
        <Component
            className={cx(
                styles.container,
                styles[size],
                styles[`padding-${padding}`],
                center && styles.center,
                className,
            )}
            {...props}
        >
            {children}
        </Component>
    )
}
