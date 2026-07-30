import { Search, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { Button, Input } from '@/components'
import { useDragScroll } from '@/hooks'
import { cx } from '@/utils/cx'

import styles from './FilterBar.module.css'

export function FilterBar({
    activeFilter,
    ariaLabel,
    className,
    closeSearchLabel = 'Close search',
    filters,
    onFilterChange,
    onQueryChange,
    query = '',
    searchLabel = 'Search',
    searchPlaceholder = 'Search...',
}) {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const containerRef = useRef(null)
    const inputRef = useRef(null)
    const { dragHandlers, scrollRef, wasClickDrag } = useDragScroll()

    useEffect(() => {
        if (!isSearchOpen) {
            return undefined
        }

        const handleClickOutside = (event) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                setIsSearchOpen(false)
                onQueryChange?.('')
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isSearchOpen, onQueryChange])

    const handleFilterClick = (filter) => {
        if (!wasClickDrag()) {
            onFilterChange(filter)
        }
    }

    const handleOpenSearch = () => {
        setIsSearchOpen(true)
        window.setTimeout(() => inputRef.current?.focus(), 100)
    }

    const handleCloseSearch = () => {
        setIsSearchOpen(false)
        onQueryChange?.('')
    }

    return (
        <section
            ref={containerRef}
            aria-label={ariaLabel}
            className={cx(styles.filterBar, className)}
        >
            <Button
                aria-label={searchLabel}
                className={styles.searchButton}
                onClick={handleOpenSearch}
                size="xs"
                type="button"
                variant="ghost"
            >
                <Search aria-hidden="true" />
            </Button>

            <div
                className={cx(
                    styles.searchInputContainer,
                    isSearchOpen && styles.showInput,
                )}
            >
                <Input
                    ref={inputRef}
                    className={styles.searchInput}
                    onChange={(event) => onQueryChange?.(event.target.value)}
                    placeholder={searchPlaceholder}
                    type="search"
                    value={query}
                />
                <Button
                    aria-label={closeSearchLabel}
                    className={styles.closeSearchButton}
                    onClick={handleCloseSearch}
                    size="xs"
                    type="button"
                    variant="ghost"
                >
                    <X aria-hidden="true" />
                </Button>
            </div>

            <div
                ref={scrollRef}
                className={cx(
                    styles.filtersScroll,
                    isSearchOpen && styles.hideFilters,
                )}
                {...dragHandlers}
            >
                {filters.map((filter) => (
                    <Button
                        className={cx(
                            styles.filter,
                            filter === activeFilter && styles.activeFilter,
                        )}
                        key={filter}
                        onClick={() => handleFilterClick(filter)}
                        size="xs"
                        type="button"
                        variant="ghost"
                    >
                        {filter}
                    </Button>
                ))}
            </div>
        </section>
    )
}
