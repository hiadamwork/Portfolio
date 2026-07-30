import { Play } from 'lucide-react'

import { Heading } from '@/components'

import styles from './ProjectVideoPreview.module.css'

export function ProjectVideoPreview() {
    return (
        <section className={styles.videoSection}>
            <Heading level={2}>Project Video</Heading>
            <div className={styles.videoCard}>
                <span className={styles.playButton}>
                    <Play aria-hidden="true" />
                </span>
            </div>
        </section>
    )
}
