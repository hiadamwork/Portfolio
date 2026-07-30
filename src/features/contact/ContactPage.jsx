import { useEffect } from 'react'
import { Container, PageLayout } from '@/components'
import {
    ContactFormPanel,
    ContactHero,
    ContactInfo,
    ContactOptions,
    ContactSupport,
} from '@/features/contact/components'
import {
    availability,
    contactMethods,
    contactPageContent,
    contactReasons,
    expectations,
    faqs,
    processSteps,
    projectBudgets,
    projectTypes,
    recentMessages,
    socialLinks,
} from '@/features/contact/data/contact'
import { ProjectCta } from '@/features/projects/components'

import styles from './ContactPage.module.css'

export function ContactPage() {
    useEffect(() => {
        document.title = "Portfolio | Contact";
    }, []); 

    return (
        <div className={styles.page}>
            <div className={styles.gridBackground} />
            <div className={styles.leftGlow} />
            <div className={styles.rightGlow} />

            <Container className={styles.container} size="wide">
                <PageLayout columns="services">
                    <PageLayout.Main>
                        <ContactHero content={contactPageContent.hero} />
                        <ContactInfo
                            availability={availability}
                            methods={contactMethods}
                            recentMessages={recentMessages}
                            socialLinks={socialLinks}
                        />
                    </PageLayout.Main>

                    <PageLayout.Sidebar>
                        <ContactFormPanel
                            budgets={projectBudgets}
                            content={contactPageContent.form}
                            projectTypes={projectTypes}
                        />
                        <ContactSupport
                            faqs={faqs}
                            reasons={contactReasons}
                            sections={contactPageContent.sections}
                        />
                    </PageLayout.Sidebar>

                    <PageLayout.Aside>
                        <ContactOptions
                            budgets={projectBudgets}
                            processSteps={processSteps}
                            projectTypes={projectTypes}
                            sections={contactPageContent.sections}
                        />
                        <ContactSupport
                            expectations={expectations}
                            quote={contactPageContent.quote}
                            sections={contactPageContent.sections}
                        />
                        <ProjectCta
                            primaryLabel={contactPageContent.cta.primaryLabel}
                            secondaryHref={
                                contactPageContent.cta.secondaryHref
                            }
                            secondaryLabel={
                                contactPageContent.cta.secondaryLabel
                            }
                            size="compact"
                            subtitle={contactPageContent.cta.subtitle}
                            title={contactPageContent.cta.title}
                        />
                    </PageLayout.Aside>
                </PageLayout>
            </Container>
        </div>
    )
}
