import { Badge, Card, Container, Grid, Heading, Text } from '@/components'
import { technologyGroups } from "@/features/home/data/homeSections";

import styles from "./TechnologyGrid.module.css";

export function TechnologyGrid() {
    return (
        <section className={styles.section} aria-labelledby="technology-title">
            <Container className={styles.container} size="wide">
                <div className={styles.header}>
                    <Text className={styles.eyebrow} size="sm">
                        Technology Stack
                    </Text>
                    <Heading id="technology-title" level={2}>
                        Tools I build with.
                    </Heading>
                    <Text className={styles.description}>
                        A modern, production-tested stack spanning frontend
                        interfaces, backend services and developer tooling.
                    </Text>
                </div>

                <Grid columns={4} gap="md">
                    {technologyGroups.map((group) => (
                        <Card className={styles.card} key={group.title}>
                            <Heading level={3} size="h6">
                                {group.title}
                            </Heading>
                            <div className={styles.pills}>
                                {group.items.map((item) => (
                                    <Badge key={item.label} tone={item.tone}>
                                        {item.label}
                                    </Badge>
                                ))}
                            </div>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}
