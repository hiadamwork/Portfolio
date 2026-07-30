import { Heading, Text } from '@/components'

import styles from './SectionHeader.module.css'

export function SectionHeader({ description, eyebrow, title }) {
    return (
        <div className={styles.sectionHeader}>
            {eyebrow ? <span>{eyebrow}</span> : null}
            <Heading level={2}>{title}</Heading>
            {description ? <Text>{description}</Text> : null}
        </div>
    )
}
