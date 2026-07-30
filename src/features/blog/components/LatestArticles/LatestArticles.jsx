import { Link } from 'react-router-dom'

import { Heading } from '@/components'
import { buildBlogDetailPath } from '@/app/router/routes'
import { formatBlogDate } from '@/features/blog/utils/formatBlogDate'

import styles from './LatestArticles.module.css'

export function LatestArticles({ articles, content }) {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <Heading level={2} size="h6">
                    {content.title}
                </Heading>
                <span>{content.badge}</span>
            </div>

            <ol className={styles.list}>
                {articles.map((article) => (
                    <li key={article.slug}>
                        <Link to={buildBlogDetailPath(article.slug)}>
                            <span className={styles.cover} />
                            <span className={styles.body}>
                                <span className={styles.eyebrow}>
                                    {content.eyebrowPrefix} ·{' '}
                                    {formatBlogDate(article.date)}
                                </span>
                                <span className={styles.title}>
                                    {article.title}
                                </span>
                            </span>
                        </Link>
                    </li>
                ))}
            </ol>
        </section>
    )
}
