import { X } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { cx } from '@/utils/cx'

import styles from './Drawer.module.css'

export function Drawer({ children, className, onClose, open, side = 'right', title }) {
    if (!open) {
        return null
    }

    return (
        <div className={styles.backdrop} role="presentation">
            <aside
                aria-label={title}
                aria-modal="true"
                className={cx(styles.drawer, styles[side], className)}
                role="dialog"
            >
                <div className={styles.header}>
                    {title ? <h2>{title}</h2> : null}
                    {onClose ? (
                        <Button aria-label="Close drawer" onClick={onClose} size="sm" variant="ghost">
                            <X aria-hidden="true" />
                        </Button>
                    ) : null}
                </div>
                {children}
            </aside>
        </div>
    )
}
