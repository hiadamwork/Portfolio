import { Link } from 'react-router-dom'

import { Badge, Button, Container, Heading, Text } from '@/components'
import { CodeEditor } from '@/features/home/components/CodeEditor'
import { cx } from '@/utils/cx'

import styles from './HomeHero.module.css'

function FloatingLabels({ items }) {
    return items.map((item) => (
        <span
            className={cx(styles.floatingLabel, styles[item.className])}
            key={item.label}
        >
            {item.label}
        </span>
    ))
}

export function HomeHero({
    codeLines,
    content,
    floatingLabels,
    onExploreClick,
    technologies,
}) {
    return (
        <section className={styles.hero} aria-labelledby="home-hero-title">
            <div className={styles.backgroundGrid} />
            <div className={styles.blueGlow} />
            <div className={styles.purpleGlow} />
            <div className={styles.bottomGlow} />

            <Container className={styles.heroContainer} size="home">
                <div className={styles.content}>
                    <Text className={styles.eyebrow} size="sm">
                        {content.eyebrow}
                    </Text>

                    <Heading
                        className={styles.title}
                        id="home-hero-title"
                        level={1}
                    >
                        <span>{content.titleHighlight}</span>
                        {content.title}
                    </Heading>

                    <Text className={styles.description} size="lg">
                        {content.description}
                    </Text>

                    <div className={styles.actions}>
                        <Button
                            as={Link}
                            to={content.primaryAction.href}
                            variant="primary"
                        >
                            {content.primaryAction.label}
                        </Button>
                        <Button
                            as={Link}
                            to={content.secondaryAction.href}
                            variant="secondary"
                        >
                            {content.secondaryAction.label}
                        </Button>
                        <span className={styles.availability}>
                            <span className={styles.availabilityDot} />
                            {content.availability}
                        </span>
                    </div>

                    <div
                        className={styles.technologyGroup}
                        aria-label={content.technologyLabel}
                    >
                        <span className={styles.technologyLabel}>
                            {content.technologyLabel}
                        </span>
                        <div className={styles.technologyList}>
                            {technologies.map((technology) => (
                                <Badge
                                    key={technology.label}
                                    tone={technology.tone}
                                >
                                    {technology.label}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.visual} aria-hidden="true">
                    <FloatingLabels items={floatingLabels} />
                    <div className={styles.orbitOne} />
                    <div className={styles.orbitTwo} />
                    <div className={styles.meshShape} />
                    <div className={styles.sphereLarge} />
                    <div className={styles.sphereSmall} />
                    <CodeEditor codeLines={codeLines} />
                </div>

                <Button
                    className={styles.scrollIndicator}
                    onClick={onExploreClick}
                    size="xs"
                    type="button"
                    variant="ghost"
                >
                    <span className={styles.mouse}>
                        <span />
                    </span>
                    <span>{content.scrollLabel}</span>
                </Button>
            </Container>
        </section>
    )
}
