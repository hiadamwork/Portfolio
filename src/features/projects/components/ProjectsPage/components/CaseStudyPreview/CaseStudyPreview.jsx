import { Card, DynamicIcon, Heading, Text } from "@/components";
import { useDragScroll } from "@/hooks";
import { cx } from "@/utils/cx";
import { SectionHeader } from "../SectionHeader";
import styles from "./CaseStudyPreview.module.css";

export function CaseStudyPreview({ content, processSteps }) {
    const { dragHandlers, isDragging, scrollRef } = useDragScroll();

    return (
        <section className={styles.caseStudy}>
            <SectionHeader eyebrow={content.eyebrow} title={content.title} />
            <div
                ref={scrollRef}
                className={cx(
                    styles.processSlider,
                    isDragging && styles.isDragging,
                )}
                {...dragHandlers}
            >
                {processSteps.map((step) => (
                    <Card
                        className={styles.processCard}
                        key={step.title}
                        padding="none"
                        radius="md"
                    >
                        <span className={styles.processIcon}>
                            <DynamicIcon name={step.icon} />
                        </span>
                        <Heading level={3} size="h6">{step.title}</Heading>
                        <Text size="xs">{step.description}</Text>
                    </Card>
                ))}
            </div>
        </section>
    );
}
