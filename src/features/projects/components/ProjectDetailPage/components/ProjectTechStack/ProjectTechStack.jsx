import { Badge, Heading } from '@/components'

import styles from './ProjectTechStack.module.css'

export function ProjectTechStack({ project }) {
    return (
        <section className={styles.techStack}>
            <Heading level={2}>Tech Stack</Heading>
            <div className={styles.stackGroups}>
                {project.techStack.map((group) => (
                    <div className={styles.stackGroup} key={group.label}>
                        <span>{group.label}</span>
                        <div>
                            {group.items.map((item) => (
                                <Badge
                                    key={item}
                                    tone={
                                        item.includes('Java') ? 'yellow' : 'blue'
                                    }
                                >
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
