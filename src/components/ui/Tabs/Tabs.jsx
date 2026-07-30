import { cx } from '@/utils/cx'

import styles from './Tabs.module.css'

export function Tabs({ children, className, label }) {
    return (
        <div aria-label={label} className={cx(styles.tabs, className)} role="tablist">
            {children}
        </div>
    )
}

export function Tab({ active = false, children, className, ...props }) {
    return (
        <button
            aria-selected={active}
            className={cx(styles.tab, active && styles.active, className)}
            role="tab"
            type="button"
            {...props}
        >
            {children}
        </button>
    )
}

Tabs.Tab = Tab
