import { DynamicIcon } from "@/components/navigation/icons/DynamicIcon";
import { cx } from "@/utils/cx";

import styles from "./Icon.module.css";

export function Icon({
    className,
    decorative = true,
    label,
    name,
    size = "md",
    tone = "primary",
}) {
    return (
        <span
            aria-hidden={decorative ? true : undefined}
            aria-label={!decorative ? label : undefined}
            className={cx(styles.icon, styles[size], styles[tone], className)}
            role={!decorative ? "img" : undefined}
        >
            <DynamicIcon name={name} />
        </span>
    );
}
