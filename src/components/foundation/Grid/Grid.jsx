import { cx } from '@/utils/cx'

import styles from './Grid.module.css'

export function Grid({
    as: Component = 'div',
    autoFit = false,
    children,
    className,
    columns = 2,
    gap = 'md',
    minColumnWidth = '16rem',
    ...props
}) {
    const gridStyle = autoFit
        ? {
              '--grid-template': `repeat(auto-fit, minmax(min(100%, ${minColumnWidth}), 1fr))`,
          }
        : undefined

    return (
        <Component
            className={cx(
                styles.grid,
                !autoFit && styles[`columns-${columns}`],
                styles[`gap-${gap}`],
                className,
            )}
            style={gridStyle}
            {...props}
        >
            {children}
        </Component>
    )
}
