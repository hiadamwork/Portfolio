import { Button } from "@/components/ui";

import styles from "./ExploreCard.module.css";

export function ExploreCard({ number, title, description, buttonLabel, link }) {
    return <article className={styles.exploreCard}>
                <span className={styles.cardNumber}>{number}</span>
                <h3>{title}</h3>
                <p>
                    {description}
                </p>
                <Button
                    as="a"
                    href={link}
                    size="sm"
                    variant="secondary"
                >
                    {buttonLabel}
                </Button>
            </article>
}
