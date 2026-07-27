import { Badge, Button, Container } from '@/components/ui'
import { ProjectCta } from '@/features/projects/components/ProjectCta'
import {
    aboutTechStack,
    buildProcess,
    focusItems,
    journeyItems,
    philosophyCards,
    specializations,
    stats,
    workValues,
} from '@/features/about/data/about'

import styles from './AboutPage.module.css'

function GlassCard({ children, className = '' }) {
    return <article className={`${styles.glassCard} ${className}`}>{children}</article>
}

export function AboutPage() {
    return (
        <div className={styles.page}>
            <div className={styles.gridBackground} />
            <div className={styles.leftGlow} />
            <div className={styles.rightGlow} />

            <Container className={styles.container} size="wide">
                <section className={styles.hero}>
                    <div className={styles.heroIntro}>
                        <h1>About Me</h1>
                        <p>
                            Building modern software with clean architecture, exceptional
                            user experience and long-term maintainability.
                        </p>

                        <div className={styles.profileRow}>
                            <div className={styles.portrait} aria-label="Adam portrait illustration">
                                <div className={styles.face} />
                                <div className={styles.body} />
                            </div>
                            <div className={styles.introCopy}>
                                <h2>
                                    Hi, I'm Adam — a Full-Stack Software Developer passionate
                                    about creating high-quality web applications.
                                </h2>
                                <p>
                                    I combine beautiful design with scalable engineering,
                                    clean code and practical problem solving for real business
                                    needs.
                                </p>
                                <div className={styles.actions}>
                                    <Button as="a" href="/Adam-CV.pdf">
                                        Download CV
                                    </Button>
                                    <Button as="a" href="/contact" variant="secondary">
                                        Let's Talk
                                    </Button>
                                    <span className={styles.availability}>
                                        <span />
                                        Available for Freelance
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside className={styles.specializePanel}>
                        <h2>What I Specialize In</h2>
                        <div className={styles.cardGrid}>
                            {specializations.map((item) => (
                                <GlassCard key={item}>
                                    <span className={styles.iconBox} />
                                    <strong>{item}</strong>
                                </GlassCard>
                            ))}
                        </div>
                    </aside>
                </section>

                <section className={styles.twoColumn}>
                    <div className={styles.leftColumn}>
                        <section className={styles.sectionBlock}>
                            <h2>How I Think About Software</h2>
                            <div className={styles.philosophyGrid}>
                                {philosophyCards.map((card) => (
                                    <GlassCard key={card.title}>
                                        <span className={styles.iconBox} />
                                        <strong>{card.title}</strong>
                                        <p>{card.description}</p>
                                    </GlassCard>
                                ))}
                            </div>
                        </section>

                        <section className={styles.journey}>
                            <h2>My Journey</h2>
                            <div className={styles.journeyTrack}>
                                {journeyItems.map((item) => (
                                    <span key={item}>{item}</span>
                                ))}
                            </div>
                        </section>
                    </div>

                    <aside className={styles.rightColumn}>
                        <section className={styles.sectionBlock}>
                            <h2>Tech Stack</h2>
                            <div className={styles.pills}>
                                {aboutTechStack.map((item) => (
                                    <Badge key={item} tone={item.includes('Java') ? 'yellow' : 'blue'}>
                                        {item}
                                    </Badge>
                                ))}
                            </div>
                        </section>

                        <section className={styles.sectionBlock}>
                            <h2>Work Values</h2>
                            <div className={styles.valueGrid}>
                                {workValues.map((value) => (
                                    <GlassCard key={value.title}>
                                        <span className={styles.iconBox} />
                                        <strong>{value.title}</strong>
                                        <p>{value.description}</p>
                                    </GlassCard>
                                ))}
                            </div>
                        </section>
                    </aside>
                </section>

                <section className={styles.bottomGrid}>
                    <div className={styles.processPanel}>
                        <h2>How I Build Software</h2>
                        <div className={styles.processFlow}>
                            {buildProcess.map((step) => (
                                <span key={step}>{step}</span>
                            ))}
                        </div>
                    </div>

                    <aside className={styles.workspacePanel}>
                        <h2>Workspace</h2>
                        <div className={styles.workspaceMockup}>
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className={styles.stats}>
                            {stats.map((stat) => (
                                <GlassCard key={stat.label}>
                                    <strong>{stat.value}</strong>
                                    <p>{stat.label}</p>
                                </GlassCard>
                            ))}
                        </div>
                    </aside>
                </section>

                <section className={styles.focusGrid}>
                    <div className={styles.quote}>
                        <blockquote>
                            Good software isn't just about writing code. It's about
                            understanding people, solving problems and creating experiences
                            that last.
                        </blockquote>
                    </div>
                    <div className={styles.focusPanel}>
                        <h2>Current Focus</h2>
                        <div>
                            {focusItems.map((item) => (
                                <GlassCard key={item}>
                                    <strong>{item}</strong>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </section>

                <ProjectCta
                    title="Let's Build Something Exceptional"
                    subtitle="Whether you're launching a startup, improving an existing product or building something completely new, I'd love to help."
                />
            </Container>
        </div>
    )
}
