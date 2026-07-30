import { Container, Grid, Heading, Text } from '@/components'
import { ExploreCard } from '@/features/home/components/ExploreCard'

import styles from './HomeExplore.module.css'

export function HomeExplore({ content }) {
    return (
        <section
            className={styles.exploreSection}
            id="home-explore"
            aria-labelledby="home-explore-title"
        >
            <Container className={styles.exploreContainer} size="wide">
                <div className={styles.exploreHeader}>
                    <Text className={styles.exploreEyebrow} size="sm">
                        {content.eyebrow}
                    </Text>
                    <Heading id="home-explore-title" level={2}>
                        {content.title}
                    </Heading>
                    <Text>{content.description}</Text>
                </div>

                <Grid columns={3} gap="md">
                    {content.cards.map((card) => (
                        <ExploreCard key={card.number} {...card} />
                    ))}
                </Grid>
            </Container>
        </section>
    )
}
