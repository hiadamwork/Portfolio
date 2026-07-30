import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { cx } from '@/utils/cx'

import styles from './Pagination.module.css'

export function Pagination({ className, onNext, onPrevious, page, totalPages }) {
    return (
        <nav aria-label="Pagination" className={cx(styles.pagination, className)}>
            <Button
                aria-label="Previous page"
                disabled={page <= 1}
                onClick={onPrevious}
                size="sm"
                variant="secondary"
            >
                <ChevronLeft aria-hidden="true" />
            </Button>
            <span className={styles.status}>
                {page} / {totalPages}
            </span>
            <Button
                aria-label="Next page"
                disabled={page >= totalPages}
                onClick={onNext}
                size="sm"
                variant="secondary"
            >
                <ChevronRight aria-hidden="true" />
            </Button>
        </nav>
    )
}
