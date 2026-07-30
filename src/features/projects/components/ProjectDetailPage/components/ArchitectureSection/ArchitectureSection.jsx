import { DynamicIcon, Heading } from "@/components";
import { resolveLabelIcon } from "@/features/projects/utils/resolveLabelIcon";

import styles from "./ArchitectureSection.module.css";

export function ArchitectureSection({ project }) {
    return (
        <section className={styles.architecture}>
            <Heading level={2}>Architecture</Heading>
            <div className={styles.architectureFlow}>
                {project.architecture.map((node, index) => (
                    <div className={styles.architectureItem} key={node}>
                        <span className={styles.nodeIcon}>
                            <DynamicIcon name={resolveLabelIcon(node)} />
                        </span>
                        <strong>{node}</strong>
                        {index < project.architecture.length - 1 ? (
                            <span
                                className={styles.nodeConnector}
                                aria-hidden="true"
                            >
                                &rarr;
                            </span>
                        ) : null}
                    </div>
                ))}
            </div>
        </section>
    );
}

