import { Link } from "react-router-dom";

import { Button } from "@/components/ui/Button/Button";
import { cx } from "@/utils/cx";

import styles from "./EmptyState.module.css";

export function EmptyState({
    action,
    actionHref,
    className,
    description,
    icon,
    title,
}) {
    return (
        <div className={cx(styles.emptyState, className)}>
            {icon && <div className={styles.icon}>{icon}</div>}
            <h2 className={styles.title}>{title}</h2>
            {description && (
                <p className={styles.description}>{description}</p>
            )}
            {action && actionHref && (
                <Button as={Link} className={styles.action} to={actionHref}>
                    {action}
                </Button>
            )}
        </div>
    );
}
