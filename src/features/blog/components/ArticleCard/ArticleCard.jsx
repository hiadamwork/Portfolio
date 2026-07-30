import { Link } from 'react-router-dom'

import { Button, Card, Heading, Text } from '@/components'
import { buildBlogDetailPath } from '@/app/router/routes'
import { ArticleMeta } from '@/features/blog/components/ArticleMeta'

import styles from './ArticleCard.module.css'

export function ArticleCard({ article, content }) {
    return (
        <Card className={styles.card} interactive padding="none">
            <div className={styles.cover} data-category={article.category}>
                <span>{article.category}</span>
            </div>

            <ArticleMeta
                article={article}
                badge={{ label: article.category }}
                className={styles.meta}
            />

            <Heading level={3} size="h6">
                {article.title}
            </Heading>
            <Text size="sm">{article.excerpt}</Text>

            <div className={styles.footer}>
                <span className={styles.author}>
                    {content.authorPrefix} {article.author}
                </span>
                <Button
                    as={Link}
                    size="sm"
                    to={buildBlogDetailPath(article.slug)}
                    variant="secondary"
                >
                    {content.readAction}
                </Button>
            </div>
        </Card>
    )
}
