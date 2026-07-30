import { Quote } from "lucide-react";

import { Avatar, Card, Container, Grid, Heading, Text } from '@/components'
import { testimonials } from "@/features/home/data/homeSections";

import styles from "./Testimonials.module.css";

export function Testimonials() {
    return (
        <section className={styles.section} aria-labelledby="testimonials-title">
            <Container className={styles.container} size="wide">
                <div className={styles.header}>
                    <Text className={styles.eyebrow} size="sm">
                        Client Feedback
                    </Text>
                    <Heading id="testimonials-title" level={2}>
                        What people say.
                    </Heading>
                </div>

                <Grid columns={3} gap="md">
                    {testimonials.map((testimonial) => (
                        <Card className={styles.card} key={testimonial.name}>
                            <Quote aria-hidden="true" className={styles.quoteMark} />
                            <Text className={styles.quote}>
                                {testimonial.quote}
                            </Text>
                            <div className={styles.person}>
                                <Avatar
                                    initials={testimonial.initials}
                                    size="lg"
                                    tone={testimonial.tone}
                                />
                                <div>
                                    <strong>{testimonial.name}</strong>
                                    <span className={styles.role}>
                                        {testimonial.role}
                                    </span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}
