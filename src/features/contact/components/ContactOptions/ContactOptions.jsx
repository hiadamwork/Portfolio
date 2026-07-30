import { Card, DynamicIcon, Heading } from "@/components";

import styles from "./ContactOptions.module.css";

export function ContactOptions({
    budgets,
    processSteps,
    projectTypes,
    sections,
}) {
    return (
        <>
            <section className={styles.optionSection}>
                <Heading level={2}>{sections.projectType}</Heading>
                <div className={styles.optionGrid}>
                    {projectTypes.map((type) => (
                        <Card
                            className={styles.optionCard}
                            key={type.label}
                            padding="none"
                            radius="md"
                        >
                            <span className={styles.optionIcon}>
                                <DynamicIcon name={type.icon} />
                            </span>
                            <strong>{type.label}</strong>
                        </Card>
                    ))}
                </div>
            </section>

            <section className={styles.budgetProcess}>
                <div className={styles.optionSection}>
                    <Heading level={2}>{sections.projectBudget}</Heading>
                    <div className={styles.budgetGrid}>
                        {budgets.map((budget) => (
                            <Card
                                className={styles.optionCard}
                                key={budget.label}
                                padding="none"
                                radius="md"
                            >
                                <span className={styles.optionIcon}>
                                    <DynamicIcon name={budget.icon} />
                                </span>
                                <strong>{budget.label}</strong>
                            </Card>
                        ))}
                    </div>
                </div>

                <section className={styles.processCard}>
                    <Heading level={2}>{sections.process}</Heading>
                    <ol className={styles.timeline}>
                        {processSteps.map((step, index) => (
                            <li key={step}>
                                <span className={styles.stepIndex}>
                                    Step {index + 1}
                                </span>
                                <span>{step}</span>
                            </li>
                        ))}
                    </ol>
                </section>
            </section>
        </>
    );
}

