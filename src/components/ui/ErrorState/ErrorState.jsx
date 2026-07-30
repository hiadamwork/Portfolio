import { AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/Button'
import { cx } from '@/utils/cx'

import styles from './ErrorState.module.css'

export function ErrorState({
    action,
    actionHref,
    className,
    description,
    title = 'Something went wrong',
}) {
    return (
        <div className={cx(styles.errorState, className)} role="alert">
            <span className={styles.icon}>
                <AlertTriangle aria-hidden="true" />
            </span>
            <h2>{title}</h2>
            {description ? <p>{description}</p> : null}
            {action && actionHref ? (
                <Button as={Link} to={actionHref} variant="secondary">
                    {action}
                </Button>
            ) : null}
        </div>
    )
}
