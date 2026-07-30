import { Card, DynamicIcon, Heading, Text } from "@/components";

import styles from "./WhyChooseMeSection.module.css";

export function WhyChooseMeSection({ content, items }) {
    return (
        <section className={styles.whySection}>
            <Heading level={2}>{content.title}</Heading>
            <div className={styles.whyGrid}>
                {items.map((item) => (
                    <Card
                        className={styles.whyCard}
                        interactive
                        key={item.title}
                        padding="none"
                    >
                        <span className={styles.whyIcon}>
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

