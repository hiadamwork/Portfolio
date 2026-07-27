import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'

import styles from './MainLayout.module.css'

export function MainLayout({ children }) {
    return (
        <div className={styles.layout}>
            <SiteHeader />
            <main className={styles.main}>{children}</main>
            <SiteFooter />
        </div>
    )
}
