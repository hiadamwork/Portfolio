import { DynamicIcon, Heading } from "@/components";

import styles from "./AboutProcess.module.css";

export function AboutProcess({ steps, title }) {
    return (
        <section className={styles.process}>
            <Heading level={2}>{title}</Heading>
            <div className={styles.processFlow}>
                {steps.slice(0, 4).map((step, index) => (
                    <div className={styles.processStep} key={step.label}>
                        <span className={styles.processIcon}>
                            <DynamicIcon name={step.icon} />
                        </span>
                        <strong>{step.label}</strong>
                        {index < 3 ? (
                            <span
                                className={styles.processConnector}
                                aria-hidden="true"
                            />
                        ) : null}
                    </div>
                ))}
            </div>
        </section>
    );
}

