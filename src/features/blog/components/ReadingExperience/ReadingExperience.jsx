import { Card, DynamicIcon, Heading } from "@/components";

import styles from "./ReadingExperience.module.css";

export function ReadingExperience({ benefits, content }) {
    return (
        <section className={styles.section}>
            <Heading level={2} size="h6">
                {content.title}
            </Heading>
            <div className={styles.grid}>
                {benefits.slice(0, 4).map((benefit) => (
                    <Card
                        className={styles.card}
                        key={benefit.label}
                        padding="none"
                        radius="md"
                    >
                        <span className={styles.icon}>
                            <DynamicIcon name={benefit.icon} />
                        </span>
                        <strong>{benefit.label}</strong>
                    </Card>
                ))}
            </div>
        </section>
    );
}

