import { cx } from '@/utils/cx'

import styles from './Text.module.css'

export function Text({
    as: Component = 'p',
    children,
    className,
    color = 'secondary',
    size = 'md',
    weight = 'regular',
    align = 'left',
    ...props
}) {
    return (
        <Component
            className={cx(
                styles.text,
                styles[size],
                styles[color],
                styles[weight],
                styles[align],
                className,
            )}
            {...props}
        >
            {children}
        </Component>
    )
}
