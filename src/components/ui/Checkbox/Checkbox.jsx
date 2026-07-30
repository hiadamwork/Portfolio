import { cx } from '@/utils/cx'

import styles from './Checkbox.module.css'

export function Checkbox({ children, className, invalid, ...props }) {
    return (
        <label className={cx(styles.checkbox, className)}>
            <input aria-invalid={invalid || undefined} type="checkbox" {...props} />
            <span>{children}</span>
        </label>
    )
}
