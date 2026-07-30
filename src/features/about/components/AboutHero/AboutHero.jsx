import { Link } from 'react-router-dom'

import { Button, Heading, Text } from '@/components'

import styles from './AboutHero.module.css'

export function AboutHero({ content }) {
    return (
        <section className={styles.hero}>
            <Heading level={1} size="h1">
                {content.title}
            </Heading>
            <Text color="secondary" size="lg">
                {content.subtitle}
            </Text>

            <div className={styles.profileRow}>
                <div
                    className={styles.portrait}
                    aria-label="Adam portrait illustration"
                >
                    <div className={styles.face} />
                    <div className={styles.body} />
                </div>
                <div className={styles.introCopy}>
                    <Heading level={2} size="h5">
                        {content.introTitle}
                    </Heading>
                    <Text>{content.introDescription}</Text>
                    <div className={styles.actions}>
                        <Button as="a" href={content.primaryAction.href}>
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
                            <span />
                            {content.availability}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
