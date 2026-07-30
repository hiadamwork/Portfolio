import { Card, Heading, Icon, Text } from "@/components";

import styles from "./GithubPreview.module.css";

export function GithubPreview({ content }) {
    return (
        <section className={styles.githubGrid}>
            <Card className={styles.githubCard} padding="none" radius="md">
                <Heading level={3} size="h6">{content.contributionTitle}</Heading>
                <Text size="xs">{content.contributionDescription}</Text>
                <a href="https://github.com" rel="noreferrer" target="_blank">
                    {content.contributionLink}
                </a>
            </Card>
            <Card className={styles.githubCard} padding="none" radius="md">
                <Heading level={3} size="h6">{content.repositoryTitle}</Heading>
                <ul>
                    {content.repositories.map((repository) => (
                        <li key={repository}>
                            <Icon label={repository} name="notebookPen" />{" "}
                            {repository}
                        </li>
                    ))}
                </ul>
            </Card>
            <Card className={styles.githubCard} padding="none" radius="md">
                <Heading level={3} size="h6">{content.commitsTitle}</Heading>
                <div className={styles.commitGraph}>
                    {Array.from({ length: 35 }).map((_, index) => (
                        <span
                            key={index}
                            style={{ "--height": `${28 + (index % 7) * 10}%` }}
                        />
                    ))}
                </div>
            </Card>
        </section>
    );
}
