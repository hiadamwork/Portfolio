import { useEffect } from 'react'
import { Container, PageLayout } from '@/components'
import { ProjectCta } from '@/features/projects/components/ProjectCta'
import {
    FeaturedService,
    ServiceTechnologies,
    ServicesGrid,
    ServicesHero,
    ServicesProcess,
    ServicesSupport,
    WhyChooseMeSection,
    WorkflowSection,
} from '@/features/services/components'
import {
    clientExpectations,
    developmentProcess,
    featuredService,
    serviceFaqs,
    services,
    servicesPageContent,
    serviceTechnologyGroups,
    whyChooseMe,
    workflow,
} from '@/features/services/data/services'

import styles from './ServicesPage.module.css'

export function ServicesPage() {
    useEffect(() => {
        document.title = "Portfolio | Services";
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.gridBackground} />
            <div className={styles.leftGlow} />
            <div className={styles.rightGlow} />

            <Container className={styles.container} size="wide">
                <PageLayout columns="services">
                    <PageLayout.Main>
                        <ServicesHero content={servicesPageContent.hero} />
                        <ServicesGrid
                            content={servicesPageContent.servicesGrid}
                            services={services}
                        />
                    </PageLayout.Main>

                    <PageLayout.Sidebar>
                        <WhyChooseMeSection
                            content={servicesPageContent.whyChooseMe}
                            items={whyChooseMe}
                        />
                        <ServicesProcess
                            content={servicesPageContent.process}
                            steps={developmentProcess}
                        />
                        <ServiceTechnologies
                            content={servicesPageContent.technologies}
                            groups={serviceTechnologyGroups}
                        />
                        <ServicesSupport
                            content={servicesPageContent.faq}
                            faqs={serviceFaqs}
                            variant="faq"
                        />
                    </PageLayout.Sidebar>

                    <PageLayout.Aside>
                        <FeaturedService
                            content={servicesPageContent.featuredService}
                            service={featuredService}
                        />
                        <WorkflowSection
                            content={servicesPageContent.workflow}
                            items={workflow}
                        />
                        <ServicesSupport
                            content={servicesPageContent.expectations}
                            expectations={clientExpectations}
                            variant="expectations"
                        />
                        <ProjectCta
                            primaryLabel={servicesPageContent.cta.primaryLabel}
                            secondaryLabel={servicesPageContent.cta.secondaryLabel}
                            size="compact"
                            subtitle={servicesPageContent.cta.subtitle}
                            title={servicesPageContent.cta.title}
                        />
                    </PageLayout.Aside>
                </PageLayout>
            </Container>
        </div>
    )
}
