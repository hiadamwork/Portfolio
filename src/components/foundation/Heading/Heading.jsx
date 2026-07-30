import { cx } from '@/utils/cx'

import styles from './Heading.module.css'

export function Heading({
    as: Component,
    children,
    className,
    color = 'primary',
    level = 2,
    size,
    align = 'left',
    ...props
}) {
    const Tag = Component ?? `h${level}`
    const headingSize = size ?? `h${level}`

    return (
        <Tag
            className={cx(
                styles.heading,
                styles[headingSize],
                styles[color],
                styles[align],
                className,
            )}
            {...props}
        >
            {children}
        </Tag>
    )
}
