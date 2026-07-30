import { useMemo, useState } from "react";

const DEFAULT_FILTER = "All";
const LATEST_ARTICLE_LIMIT = 3;

export function useProjectFilters(projects) {
    const [activeFilter, setActiveFilter] = useState(DEFAULT_FILTER);
    const [query, setQuery] = useState("");

    const latestArticles = useMemo(
        () =>
            [...projects]
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, LATEST_ARTICLE_LIMIT),
        [projects],
    );

    const featuredArticle = useMemo(() => latestArticles[0], [latestArticles]);

    const visibleProjects = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        return projects.filter((project) => {
            const matchesFilter =
                activeFilter === DEFAULT_FILTER ||
                project.categories.includes(activeFilter);

            const matchesQuery =
                normalizedQuery.length === 0 ||
                project.title.toLowerCase().includes(normalizedQuery) ||
                project.shortTitle.toLowerCase().includes(normalizedQuery) ||
                project.description.toLowerCase().includes(normalizedQuery);

            return matchesFilter && matchesQuery;
        });
    }, [activeFilter, projects, query]);

    return {
        activeFilter,
        featuredArticle,
        latestArticles,
        query,
        setActiveFilter,
        setQuery,
        visibleProjects,
    };
}
