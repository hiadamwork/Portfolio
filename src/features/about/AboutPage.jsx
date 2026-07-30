import { useEffect } from 'react'
import { Container, PageLayout } from '@/components'
import {
    AboutHero,
    AboutJourney,
    AboutProcess,
    AboutQuote,
    AboutTechStack,
    AboutWorkspace,
    CardGridSection,
} from '@/features/about/components'
import {
    aboutPageContent,
    aboutTechStack,
    buildProcess,
    focusItems,
    funFacts,
    journeyItems,
    philosophyCards,
    specializations,
    stats,
    workValues,
} from '@/features/about/data/about'

import styles from './AboutPage.module.css'

export function AboutPage() {
    useEffect(() => {
        document.title = "Portfolio | About";
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.gridBackground} />
            <div className={styles.leftGlow} />
            <div className={styles.rightGlow} />

            <Container className={styles.container} size="wide">
                <PageLayout columns="services">
                    <PageLayout.Main>
                        <AboutHero content={aboutPageContent.hero} />
                        <CardGridSection
                            items={philosophyCards}
                            title={aboutPageContent.sections.philosophy}
                            variant="wide"
                        />
                        <AboutJourney
                            items={journeyItems}
                            title={aboutPageContent.sections.journey}
                        />
                    </PageLayout.Main>

                    <PageLayout.Sidebar>
                        <CardGridSection
                            items={specializations}
                            title={aboutPageContent.sections.specializations}
                            variant="default"
                        />
                        <AboutTechStack
                            items={aboutTechStack}
                            title={aboutPageContent.sections.techStack}
                        />
                        <CardGridSection
                            items={workValues}
                            title={aboutPageContent.sections.workValues}
                            variant="compact"
                        />
                        <AboutProcess
                            steps={buildProcess}
                            title={aboutPageContent.sections.process}
                        />
                    </PageLayout.Sidebar>

                    <PageLayout.Aside>
                        <AboutWorkspace
                            facts={funFacts}
                            stats={stats}
                            title={aboutPageContent.sections.workspace}
                        />
                        <AboutQuote
                            cta={aboutPageContent.cta}
                            focusItems={focusItems}
                            quote={aboutPageContent.quote}
                            title={aboutPageContent.sections.focus}
                        />
                    </PageLayout.Aside>
                </PageLayout>
            </Container>
        </div>
    )
}
