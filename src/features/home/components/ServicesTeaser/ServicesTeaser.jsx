import { Link } from "react-router-dom";

import { Button, Card, Container, Grid, Heading, Icon, Text } from "@/components";
import { serviceTeasers } from "@/features/home/data/homeSections";

import styles from "./ServicesTeaser.module.css";

export function ServicesTeaser() {
    return (
        <section className={styles.section} aria-labelledby="services-title">
            <Container className={styles.container} size="wide">
                <div className={styles.header}>
                    <div>
                        <Text className={styles.eyebrow} size="sm">
                            What I Do
                        </Text>
                        <Heading id="services-title" level={2}>
                            Services built around outcomes.
                        </Heading>
                    </div>
                    <Button as={Link} to="/services" variant="secondary">
                        Explore Services
                    </Button>
                </div>

                <Grid columns={4} gap="md">
                    {serviceTeasers.map((service) => (
                        <Card
                            className={styles.card}
                            interactive
                            key={service.title}
                        >
                            <span className={styles.icon}>
                                <Icon name={service.icon} />
                            </span>
                            <Heading level={3} size="h6">
                                {service.title}
                            </Heading>
                            <Text size="sm">{service.description}</Text>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

