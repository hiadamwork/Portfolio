import { Card, Heading } from '@/components'

import styles from './ProjectInfoGrid.module.css'

export function ProjectInfoGrid({ project }) {
    const projectInfo = [
        { label: 'Role', value: project.role },
        { label: 'Duration', value: project.duration },
        { label: 'Platform', value: project.platform },
        { label: 'Status', value: project.status },
    ]

    return (
        <section className={styles.infoSection} aria-labelledby="project-info-title">
            <Heading id="project-info-title" level={2}>
                Project Information
            </Heading>
            <div className={styles.infoGrid}>
                {projectInfo.map((item) => (
                    <Card
                        className={styles.infoCard}
                        key={item.label}
                        padding="none"
                        radius="md"
                    >
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                    </Card>
                ))}
            </div>
        </section>
    )
}
