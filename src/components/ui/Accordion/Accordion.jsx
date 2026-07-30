import { cx } from '@/utils/cx'

import styles from './Accordion.module.css'

export function Accordion({ className, items = [] }) {
    return (
        <div className={cx(styles.accordion, className)}>
            {items.map((item) => (
                <details className={styles.item} key={item.title}>
                    <summary>{item.title}</summary>
                    <div className={styles.content}>{item.content}</div>
                </details>
            ))}
        </div>
    )
}
