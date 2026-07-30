import { Heading } from '@/components'
import { ProjectMockup } from '@/features/projects/components/ProjectMockup'

import styles from './ProjectScreenshots.module.css'

export function ProjectScreenshots({ project }) {
    return (
        <section className={styles.gallery}>
            <Heading level={2}>Screenshots Gallery</Heading>
            <div className={styles.galleryTrack}>
                <ProjectMockup compact variant={project.variant} />
                <ProjectMockup compact variant="commerce" />
                <ProjectMockup compact variant="terminal" />
            </div>
        </section>
    )
}
