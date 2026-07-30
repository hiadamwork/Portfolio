import { Surface } from '@/components/foundation'
import { cx } from '@/utils/cx'

import styles from './Card.module.css'

export function Card({
    as = 'article',
    children,
    className,
    interactive = false,
    padding = 'md',
    radius = 'lg',
    ...props
}) {
    return (
        <Surface
            as={as}
            className={cx(styles.card, className)}
            interactive={interactive}
            padding={padding}
            radius={radius}
            variant="glass"
            {...props}
        >
            {children}
        </Surface>
    )
}
