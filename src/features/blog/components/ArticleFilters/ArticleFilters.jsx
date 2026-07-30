import { FilterBar } from '@/components'

export function ArticleFilters({
    activeFilter,
    content,
    filters,
    query,
    onFilterChange,
    onQueryChange,
}) {
    return (
        <FilterBar
            activeFilter={activeFilter}
            ariaLabel={content.ariaLabel}
            closeSearchLabel={content.closeSearchLabel}
            filters={filters}
            onFilterChange={onFilterChange}
            onQueryChange={onQueryChange}
            query={query}
            searchLabel={content.searchLabel}
            searchPlaceholder={content.searchPlaceholder}
        />
    )
}
