import { cx } from '@/utils/cx'

import styles from './Section.module.css'

export function Section({
    as: Component = 'section',
    background = 'transparent',
    children,
    className,
    spacing = 'lg',
    ...props
}) {
    return (
        <Component
            className={cx(
                styles.section,
                styles[background],
                styles[`spacing-${spacing}`],
                className,
            )}
            {...props}
        >
            {children}
        </Component>
    )
}
