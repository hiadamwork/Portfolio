import { Card, DynamicIcon } from "@/components";
import { cx } from "@/utils/cx";

import styles from "./GlassCard.module.css";

export function GlassCard({ children, className, icon }) {
    return (
        <Card
            className={cx(styles.glassCard, className)}
            interactive
            padding="none"
            radius="md"
        >
            {icon ? (
                <span className={styles.iconBox}>
                    <DynamicIcon name={icon} />
                </span>
            ) : null}
            {children}
        </Card>
    );
}

