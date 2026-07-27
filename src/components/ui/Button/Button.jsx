import { cx } from '@/utils/cx'

import styles from './Button.module.css'

export function Button({
    as: Component = 'button',
    children,
    className,
    href,
    size = 'md',
    variant = 'primary',
    ...props
}) {
    const componentProps = Component === 'a' ? { href, ...props } : props

    return (
        <Component
            className={cx(styles.button, styles[variant], styles[size], className)}
            {...componentProps}
        >
            {children}
        </Component>
    )
}
