import { forwardRef } from 'react'

import { cx } from '@/utils/cx'

import styles from './Input.module.css'

export const Input = forwardRef(function Input(
    { className, invalid, type = 'text', ...props },
    ref,
) {
    return (
        <input
            ref={ref}
            aria-invalid={invalid || undefined}
            className={cx(styles.input, className)}
            type={type}
            {...props}
        />
    )
})
