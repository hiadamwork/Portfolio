import { X } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { cx } from '@/utils/cx'

import styles from './Modal.module.css'

export function Modal({ children, className, onClose, open, title }) {
    if (!open) {
        return null
    }

    return (
        <div className={styles.backdrop} role="presentation">
            <section
                aria-modal="true"
                aria-label={title}
                className={cx(styles.modal, className)}
                role="dialog"
            >
                <div className={styles.header}>
                    {title ? <h2>{title}</h2> : null}
                    {onClose ? (
                        <Button aria-label="Close modal" onClick={onClose} size="sm" variant="ghost">
                            <X aria-hidden="true" />
                        </Button>
                    ) : null}
                </div>
                {children}
            </section>
        </div>
    )
}
