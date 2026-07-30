import { cx } from '@/utils/cx'

import styles from './Textarea.module.css'

export function Textarea({ className, invalid, rows = 5, ...props }) {
    return (
        <textarea
            aria-invalid={invalid || undefined}
            className={cx(styles.textarea, className)}
            rows={rows}
            {...props}
        />
    )
}
