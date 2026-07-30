import { DynamicIcon, Heading, Text } from "@/components";

import styles from "./ServicesProcess.module.css";

export function ServicesProcess({ content, steps }) {
    return (
        <section className={styles.processSection}>
            <Heading level={2}>{content.title}</Heading>
            <ol className={styles.processTimeline}>
                {steps.map((step, index) => (
                    <li className={styles.processItem} key={step.title}>
                        <span className={styles.processIcon}>
                            <DynamicIcon name={step.icon} />
                        </span>
                        <div className={styles.processContent}>
                            <span className={styles.processStepLabel}>
                                {content.stepPrefix} {index + 1}
                            </span>
                            <strong>{step.title}</strong>
                            <Text size="xs">{step.description}</Text>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}

