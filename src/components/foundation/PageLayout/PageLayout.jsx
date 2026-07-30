import { cx } from '@/utils/cx'

import styles from './PageLayout.module.css'

export function PageLayout({
    children,
    className,
    columns = 'three',
    gap = 'default',
    id,
}) {
    return (
        <div
            id={id}
            className={cx(
                styles.layout,
                styles[columns],
                styles[`gap-${gap}`],
                className,
            )}
        >
            {children}
        </div>
    )
}

function PageLayoutMain({ children, className }) {
    return <div className={cx(styles.main, className)}>{children}</div>
}

function PageLayoutSidebar({ children, className }) {
    return <aside className={cx(styles.sidebar, className)}>{children}</aside>
}

function PageLayoutAside({ children, className }) {
    return <aside className={cx(styles.aside, className)}>{children}</aside>
}

PageLayout.Main = PageLayoutMain
PageLayout.Sidebar = PageLayoutSidebar
PageLayout.Aside = PageLayoutAside
