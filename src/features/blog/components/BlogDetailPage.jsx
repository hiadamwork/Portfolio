import { Link, useParams } from "react-router-dom";

import { Badge, Button, Container, EmptyState, Heading, Text } from '@/components'
import { articles } from "@/features/blog/data/blog";

import styles from "./BlogDetailPage.module.css";

function formatDate(isoDate) {
    return new Date(isoDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function BlogDetailPage() {
    const { slug } = useParams();
    const article = articles.find((item) => item.slug === slug);

    if (!article) {
        return (
            <div className={styles.page}>
                <Container size="default">
                    <EmptyState
                        action="Back to Blog"
                        actionHref="/blog"
                        description="The article you are looking for does not exist."
                        title="Article not found"
                    />
                </Container>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <Container className={styles.container} size="default">
                <Link className={styles.backLink} to="/blog">
                    &larr; Back to Blog
                </Link>

                <div className={styles.meta}>
                    <Badge tone="blue">{article.category}</Badge>
                    <span>{article.readTime}</span>
                    <span>{formatDate(article.date)}</span>
                </div>

                <Heading level={1}>{article.title}</Heading>
                <Text className={styles.excerpt}>{article.excerpt}</Text>
                <span className={styles.author}>By {article.author}</span>

                <div className={styles.comingSoon}>
                    <Heading level={2}>Full article coming soon</Heading>
                    <Text>
                        This article is in progress. In the meantime, take a
                        look at recent projects or get in touch to discuss a
                        similar build.
                    </Text>
                    <div className={styles.comingSoonActions}>
                        <Button as={Link} to="/blog" variant="secondary">
                            Browse Other Articles
                        </Button>
                        <Button as={Link} to="/contact">
                            Contact Me
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
