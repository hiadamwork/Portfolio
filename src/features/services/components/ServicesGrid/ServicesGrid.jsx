import { Badge, Card, DynamicIcon, Heading, Text } from "@/components";

import styles from "./ServicesGrid.module.css";

export function ServicesGrid({ content, services }) {
    return (
        <section
            className={styles.servicesSection}
            aria-labelledby="services-grid-title"
        >
            <Heading className={styles.title} id="services-grid-title" level={2}>
                {content.title}
            </Heading>
            <div className={styles.servicesGrid}>
                {services.map((service) => (
                    <Card
                        className={styles.serviceCard}
                        interactive
                        key={service.title}
                        padding="none"
                    >
                        <span className={styles.serviceIcon}>
                            <DynamicIcon name={service.icon} />
                        </span>
                        <Heading level={3} size="h6">
                            {service.title}
                        </Heading>
                        <Text size="xs">{service.description}</Text>
                        <div className={styles.serviceTags}>
                            {service.tags.map((tag) => (
                                <Badge key={tag}>{tag}</Badge>
                            ))}
                        </div>
                        <span className={styles.serviceDelivery}>
                            {content.deliveryPrefix} {service.delivery}
                        </span>
                    </Card>
                ))}
            </div>
        </section>
    );
}

