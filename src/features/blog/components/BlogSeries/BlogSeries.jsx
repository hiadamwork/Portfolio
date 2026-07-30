import { Button, Card, DynamicIcon, Heading, Progress, Text } from "@/components";

import styles from "./BlogSeries.module.css";

function SeriesCard({ item, content }) {
    const progress = Math.round((item.progress / item.articleCount) * 100);

    return (
        <Card className={styles.card} key={item.title} padding="none">
            <span className={styles.icon}>
                <DynamicIcon name={item.icon} />
            </span>
            <Heading level={3} size="h6">
                {item.title}
            </Heading>
            <Text size="xs">{item.description}</Text>

            <div className={styles.progressRow}>
                <Progress
                    className={styles.progress}
                    label={`${item.title} progress`}
                    value={progress}
                />
                <span>{progress}%</span>
            </div>
            <Button size="sm" variant="secondary">
                {content.action}
            </Button>
        </Card>
    );
}

export function BlogSeries({ content, series }) {
    return (
        <section className={styles.section}>
            <Heading level={2} size="h6">
                {content.title}
            </Heading>

            <div className={styles.grid}>
                {series.map((item) => {
                    return (
                        <SeriesCard key={item.title} item={item} content={content} />
                    );
                })}
            </div>
        </section>
    );
}

