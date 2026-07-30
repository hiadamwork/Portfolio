import { DynamicIcon, Heading } from "@/components";
import { resolveLabelIcon } from "@/features/projects/utils/resolveLabelIcon";

import styles from "./ProjectTimeline.module.css";

export function ProjectTimeline({ project }) {
    return (
        <section className={styles.timeline}>
            <Heading level={2}>Development Process</Heading>
            <ol className={styles.timelineList}>
                {project.timeline.map((step) => (
                    <li className={styles.timelineItem} key={step}>
                        <span className={styles.timelineIcon}>
                            <DynamicIcon name={resolveLabelIcon(step)} />
                        </span>
                        <span>{step}</span>
                    </li>
                ))}
            </ol>
        </section>
    );
}

