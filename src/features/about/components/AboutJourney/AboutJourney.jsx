import { DynamicIcon, Heading, Text } from "@/components";

import styles from "./AboutJourney.module.css";

export function AboutJourney({ items, title }) {
    return (
        <section className={styles.journey}>
            <Heading level={2}>{title}</Heading>
            <ol className={styles.journeyTrack}>
                {items.map((item) => (
                    <li className={styles.journeyItem} key={item.title}>
                        <span className={styles.journeyIcon}>
                            <DynamicIcon name={item.icon} />
                        </span>
                        <div className={styles.journeyContent}>
                            <span>{item.year}</span>
                            <strong>{item.title}</strong>
                            <Text size="xs">{item.description}</Text>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}

