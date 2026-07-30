import { Container, EmptyState } from '@/components'

import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
    return (
        <div className={styles.page}>
            <Container size="default">
                <EmptyState
                    action="Back to Home"
                    actionHref="/"
                    description="The page you are looking for does not exist or has been moved."
                    title="404 - Page Not Found"
                />
            </Container>
        </div>
    );
}
