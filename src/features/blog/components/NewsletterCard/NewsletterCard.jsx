import { Button, Heading, Input, Text } from '@/components'

import styles from './NewsletterCard.module.css'

export function NewsletterCard({ content }) {
    return (
        <section className={styles.section} id="newsletter">
            <Heading level={2} size="h6">
                {content.sectionTitle}
            </Heading>
            <div className={styles.card}>
                <Heading level={3} size="h5" align="center">
                    {content.title}
                </Heading>
                <Text align="center" color="primary" size="sm">
                    {content.description}
                </Text>
                <form
                    className={styles.form}
                    onSubmit={(event) => event.preventDefault()}
                >
                    <Input
                        aria-label={content.emailLabel}
                        className={styles.input}
                        placeholder={content.emailPlaceholder}
                        required
                        type="email"
                    />
                    <Button size="sm" type="submit" variant="secondary">
                        {content.submitLabel}
                    </Button>
                </form>
            </div>
        </section>
    )
}
