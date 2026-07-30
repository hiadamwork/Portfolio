import { Heading } from '@/components'

import { ArticleCard } from '../ArticleCard'

import styles from './ArticleGrid.module.css'

export function ArticleGrid({ articles, content }) {
    return (
        <section className={styles.section} aria-label={content.ariaLabel}>
            <Heading className={styles.title} level={2}>
                {content.title}
            </Heading>
            <div className={styles.grid}>
                {articles.map((article) => (
                    <ArticleCard
                        article={article}
                        content={content}
                        key={article.slug}
                    />
                ))}
            </div>
        </section>
    )
}
