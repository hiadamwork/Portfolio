import { Accordion, Card, Heading } from '@/components'

import styles from './ServicesSupport.module.css'

export function ServicesSupport({
    content,
    expectations = [],
    faqs = [],
    variant = 'faq',
}) {
    if (variant === 'expectations') {
        const columns = [
            expectations.slice(0, Math.ceil(expectations.length / 2)),
            expectations.slice(Math.ceil(expectations.length / 2)),
        ]

        return (
            <section className={styles.expectationsSection}>
                <Heading level={2}>{content.title}</Heading>
                <div className={styles.expectationCards}>
                    {columns.map((items, index) => (
                        <Card
                            as="div"
                            className={styles.expectationsList}
                            key={index}
                            padding="none"
                            radius="md"
                        >
                            {items.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </Card>
                    ))}
                </div>
            </section>
        )
    }

    return (
        <section className={styles.faqSection}>
            <Heading level={2}>{content.title}</Heading>
            <Accordion
                className={styles.accordion}
                items={faqs.map((faq) => ({
                    content: faq.answer,
                    title: faq.question,
                }))}
            />
        </section>
    )
}
