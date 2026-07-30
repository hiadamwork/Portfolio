import { Link } from "react-router-dom";

import { Button, Card, Heading, Text } from '@/components'

import styles from "./ExploreCard.module.css";

export function ExploreCard({ buttonLabel, description, link, number, title }) {
    return (
        <Card className={styles.exploreCard}>
            <span className={styles.cardNumber}>{number}</span>
            <Heading level={3} size="h6">
                {title}
            </Heading>
            <Text size="sm">{description}</Text>
            <Button as={Link} to={link} size="sm" variant="secondary">
                {buttonLabel}
            </Button>
        </Card>
    );
}
