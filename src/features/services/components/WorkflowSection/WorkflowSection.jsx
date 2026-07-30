import { Card, DynamicIcon, Heading, Text } from "@/components";

import styles from "./WorkflowSection.module.css";

export function WorkflowSection({ content, items }) {
    return (
        <section className={styles.workflowSection}>
            <Heading level={2}>{content.title}</Heading>
            <div className={styles.workflowGrid}>
                {items.map((item) => (
                    <Card
                        className={styles.workflowCard}
                        interactive
                        key={item.title}
                        padding="none"
                    >
                        <span className={styles.workflowIcon}>
                            <DynamicIcon name={item.icon} />
                        </span>
                        <Heading level={3} size="h6">
                            {item.title}
                        </Heading>
                        <Text size="xs">{item.description}</Text>
                    </Card>
                ))}
            </div>
        </section>
    );
}

