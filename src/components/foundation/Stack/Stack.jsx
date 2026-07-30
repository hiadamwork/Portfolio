import { cx } from '@/utils/cx'

import styles from './Stack.module.css'

export function Stack({
    as: Component = 'div',
    align = 'stretch',
    children,
    className,
    direction = 'column',
    gap = 'md',
    justify = 'start',
    wrap = false,
    ...props
}) {
    return (
        <Component
            className={cx(
                styles.stack,
                styles[direction],
                styles[`align-${align}`],
                styles[`justify-${justify}`],
                styles[`gap-${gap}`],
                wrap && styles.wrap,
                className,
            )}
            {...props}
        >
            {children}
        </Component>
    )
}
