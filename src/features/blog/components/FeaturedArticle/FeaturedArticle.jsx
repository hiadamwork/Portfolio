import { Link } from "react-router-dom";
import { Bookmark, Share2 } from "lucide-react";

import { Button, Heading, Text } from "@/components";
import { buildBlogDetailPath } from "@/app/router/routes";
import { ArticleMeta } from "@/features/blog/components/ArticleMeta";

import styles from "./FeaturedArticle.module.css";

export function FeaturedArticle({ article, content }) {
    return (
        <section className={styles.section} aria-labelledby="featured-title">
            <Heading className={styles.sectionTitle} level={2} size="h6">
                {content.sectionTitle}
            </Heading>

            <article className={`${styles.card} glowBorder`}>
                <div className={styles.cover} data-category={article.category}>
                    <span>{article.category}</span>
                </div>

                <div className={styles.content}>
                    <ArticleMeta
                        article={article}
                        badge={{ label: content.badge, tone: "blue" }}
                        className={styles.meta}
                    />

                    <Heading id="featured-title" level={3} size="h5">
                        {article.title}
                    </Heading>
                    <Text size="sm">{article.excerpt}</Text>

                    <div className={styles.actions}>
                        <Button
                            as={Link}
                            size="sm"
                            to={buildBlogDetailPath(article.slug)}
                        >
                            {content.readAction}
                        </Button>
                        <Button size="sm" variant="secondary">
                            <Share2 aria-hidden="true" />
                            {content.shareAction}
                        </Button>
                        <Button size="sm" variant="ghost">
                            <Bookmark aria-hidden="true" />
                            {content.bookmarkAction}
                        </Button>
                    </div>
                </div>
            </article>
        </section>
    );
}
