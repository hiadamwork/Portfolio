import { Link } from "react-router-dom";

import { Badge, Button, Heading, Text } from "@/components";
import { ProjectMockup } from "@/features/projects/components/ProjectMockup";

import styles from "./FeaturedService.module.css";

export function FeaturedService({ content, service }) {
    return (
        <section className={styles.featuredSection}>
            <Heading level={2}>{content.title}</Heading>
            <div className={styles.card}>
                <div className={styles.featuredContent}>
                    <Heading level={3}>Custom React Applications</Heading>
                    <Text className={styles.featuredDescription} size="sm">
                        {service.description}
                    </Text>
                    <div className={styles.featuredTags}>
                        {service.tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                        ))}
                    </div>
                    <div className={styles.actions}>
                        <Button
                            as={Link}
                            to={content.primaryAction.href}
                            size="sm"
                        >
                            {content.primaryAction.label}
                        </Button>
                        <Button
                            as={Link}
                            to={content.secondaryAction.href}
                            variant="secondary"
                            size="sm"
                        >
                            {content.secondaryAction.label}
                        </Button>
                    </div>
                </div>
                <ProjectMockup
                    className={styles.featuredMockup}
                    variant={service.variant}
                />
            </div>
        </section>
    );
}
