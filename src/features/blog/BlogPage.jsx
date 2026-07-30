import { useEffect } from 'react'
import { Container, PageLayout } from '@/components'
import {
    ArticleFilters,
    ArticleGrid,
    AuthorSection,
    BlogCta,
    BlogHero,
    BlogSeries,
    FeaturedArticle,
    LatestArticles,
    NewsletterCard,
    PopularTopics,
    ReadingExperience,
} from '@/features/blog/components'
import {
    articles,
    blogFilters,
    blogPageContent,
    learningSeries,
    popularTopics,
    readingBenefits,
} from '@/features/blog/data/blog'
import { useBlogArticles } from '@/features/blog/hooks'

import styles from './BlogPage.module.css'

export function BlogPage() {
    const blogArticles = useBlogArticles(articles)

    useEffect(() => {
        document.title = "Portfolio | Blog";
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.gridBackground} />
            <div className={styles.leftGlow} />
            <div className={styles.rightGlow} />

            <Container className={styles.container} size="wide">
                <PageLayout>
                    <PageLayout.Main>
                        <BlogHero content={blogPageContent.hero} />

                        {blogArticles.featuredArticle && (
                            <FeaturedArticle
                                article={blogArticles.featuredArticle}
                                content={blogPageContent.featured}
                            />
                        )}

                        <ArticleFilters
                            activeFilter={blogArticles.activeFilter}
                            content={blogPageContent.filters}
                            filters={blogFilters}
                            query={blogArticles.query}
                            onFilterChange={blogArticles.setActiveFilter}
                            onQueryChange={blogArticles.setQuery}
                        />

                        <ArticleGrid
                            articles={blogArticles.visibleArticles}
                            content={blogPageContent.articleGrid}
                        />
                    </PageLayout.Main>

                    <PageLayout.Sidebar>
                        <PopularTopics
                            content={blogPageContent.topics}
                            topics={popularTopics}
                        />
                        <LatestArticles
                            articles={blogArticles.latestArticles}
                            content={blogPageContent.latest}
                        />
                        <BlogSeries
                            content={blogPageContent.series}
                            series={learningSeries}
                        />
                    </PageLayout.Sidebar>

                    <PageLayout.Aside>
                        <NewsletterCard content={blogPageContent.newsletter} />
                        <ReadingExperience
                            benefits={readingBenefits}
                            content={blogPageContent.readingExperience}
                        />
                        <blockquote className={styles.quote}>
                            {blogPageContent.quote}
                        </blockquote>
                        <AuthorSection content={blogPageContent.author} />
                        <BlogCta content={blogPageContent.cta} />
                    </PageLayout.Aside>
                </PageLayout>
            </Container>
        </div>
    )
}
