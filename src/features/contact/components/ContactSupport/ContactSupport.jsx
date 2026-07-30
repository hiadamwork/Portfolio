import { Accordion, Card, DynamicIcon, Heading } from '@/components'

import styles from './ContactSupport.module.css'

export function ContactSupport({
    expectations = [],
    faqs = [],
    quote,
    reasons = [],
    sections,
}) {
    return (
        <>
            {reasons.length > 0 ? (
                <section className={styles.reasonPanel}>
                    <Heading level={2}>{sections.whyContact}</Heading>
                    <div className={styles.reasonGrid}>
                        {reasons.map((reason) => (
                            <Card
                                className={styles.miniCard}
                                interactive
                                key={reason.label}
                                padding="none"
                                radius="md"
                            >
                                <span className={styles.optionIcon}>
                                    <DynamicIcon name={reason.icon} />
                                </span>
                                <strong>{reason.label}</strong>
                            </Card>
                        ))}
                    </div>
                </section>
            ) : null}

            {faqs.length > 0 ? (
                <Card
                    as="section"
                    className={styles.faqCard}
                    padding="none"
                    radius="md"
                >
                    <Heading level={2}>{sections.faq}</Heading>
                    <Accordion
                        items={faqs.map((faq) => ({
                            content: faq.answer,
                            title: faq.question,
                        }))}
                    />
                </Card>
            ) : null}

            {expectations.length > 0 ? (
                <section className={styles.expectationsCard}>
                    <Heading level={2}>{sections.expectations}</Heading>
                    <Card
                        as="div"
                        className={styles.expectationsList}
                        padding="none"
                        radius="md"
                    >
                        {expectations.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </Card>
                    {quote ? <blockquote>{quote}</blockquote> : null}
                </section>
            ) : null}
        </>
    )
}

