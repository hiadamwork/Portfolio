import { useMemo, useState } from 'react'

const DEFAULT_FILTER = 'All'
const LATEST_ARTICLE_LIMIT = 3

export function useBlogArticles(articles) {
    const [activeFilter, setActiveFilter] = useState(DEFAULT_FILTER)
    const [query, setQuery] = useState('')

    const featuredArticle = useMemo(
        () => articles.find((article) => article.featured),
        [articles],
    )

    const latestArticles = useMemo(
        () =>
            [...articles]
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, LATEST_ARTICLE_LIMIT),
        [articles],
    )

    const visibleArticles = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase()

        return articles
            .filter((article) => article.featured !== true)
            .filter((article) => {
                const matchesFilter =
                    activeFilter === DEFAULT_FILTER ||
                    article.category === activeFilter

                const matchesQuery =
                    normalizedQuery.length === 0 ||
                    article.title.toLowerCase().includes(normalizedQuery) ||
                    article.excerpt.toLowerCase().includes(normalizedQuery)

                return matchesFilter && matchesQuery
            })
    }, [activeFilter, articles, query])

    return {
        activeFilter,
        featuredArticle,
        latestArticles,
        query,
        setActiveFilter,
        setQuery,
        visibleArticles,
    }
}
