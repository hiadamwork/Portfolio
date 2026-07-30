import { Card, DynamicIcon, Heading, Text } from "@/components";
import { resolveLabelIcon } from "@/features/projects/utils/resolveLabelIcon";

import styles from "./ProjectOverview.module.css";

export function ProjectOverview({ project }) {
    const overviewSections = [
        { label: "Problem", value: project.overview.problem },
        { label: "Solution", value: project.overview.solution },
        { label: "Goals", value: project.overview.goals },
        { label: "Result", value: project.overview.result },
    ];

    const projectFeatures = project.features.map((feature) => ({
        title: feature,
        description: `A core capability built into ${project.title}.`,
    }));

    return (
        <section className={styles.overview}>
            <div>
                <Heading level={2}>Project Overview</Heading>
                {overviewSections.map((section) => (
                    <article key={section.label}>
                        <Heading level={3} size="h6">
                            {section.label}
                        </Heading>
                        <Text size="xs">{section.value}</Text>
                    </article>
                ))}
            </div>

            <div>
                <Heading level={2}>Features</Heading>
                <div className={styles.featureGrid}>
                    {projectFeatures.map((feature) => (
                        <Card
                            className={styles.featureCard}
                            key={feature.title}
                            padding="none"
                            radius="md"
                        >
                            <span className={styles.featureIcon}>
                                <DynamicIcon
                                    name={resolveLabelIcon(feature.title)}
                                />
                            </span>
                            <Heading level={3} size="h6">
                                {feature.title}
                            </Heading>
                            <Text size="xs">{feature.description}</Text>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

