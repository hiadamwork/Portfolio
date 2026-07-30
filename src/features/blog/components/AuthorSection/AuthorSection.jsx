import { Link } from 'react-router-dom'

import { Button, Card, Heading, Text } from '@/components'

import styles from './AuthorSection.module.css'

export function AuthorSection({ content }) {
    return (
        <section className={styles.section}>
            <Heading level={2} size="h6">
                {content.sectionTitle}
            </Heading>
            <Card as="div" className={styles.card} padding="none">
                <div className={styles.portrait}>
                    <div className={styles.face} />
                    <div className={styles.body} />
                </div>

                <div className={styles.content}>
                    <Heading level={3} size="h6">
                        {content.name}
                    </Heading>
                    <Text size="xs">{content.bio}</Text>
                    <div className={styles.actions}>
                        {content.links.map((link) =>
                            link.type === 'internal' ? (
                                <Button
                                    as={Link}
                                    key={link.label}
                                    size="sm"
                                    to={link.href}
                                    variant="secondary"
                                >
                                    {link.label}
                                </Button>
                            ) : (
                                <Button
                                    as="a"
                                    href={link.href}
                                    key={link.label}
                                    rel="noreferrer"
                                    size="sm"
                                    target="_blank"
                                    variant="secondary"
                                >
                                    {link.label}
                                </Button>
                            ),
                        )}
                    </div>
                </div>
            </Card>
        </section>
    )
}
