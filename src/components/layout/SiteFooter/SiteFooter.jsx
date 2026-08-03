import { Link } from "react-router-dom";

import { NAVIGATION_ITEMS } from "@/app/router/routes";
import { BrandLogo, Container, DynamicIcon } from "@/components";

import styles from "./SiteFooter.module.css";

const SOCIAL_LINKS = [
    {
        label: "GitHub",
        href: "https://github.com/hiadamwork",
        icon: <DynamicIcon name="github" />,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/adamdlugos",
        icon: <DynamicIcon name="linkedin" />,
    },
];

const RESOURCE_LINKS = [
    { label: "Download CV", href: "/Adam-CV.pdf" },
    { label: "Latest Articles", href: "/blog" },
    { label: "Case Studies", href: "/projects" },
];

const CURRENT_YEAR = new Date().getFullYear();

export function SiteFooter() {
    return (
        <footer className={styles.footer}>
            <Container className={styles.container} size="wide">
                <div className={styles.top}>
                    <div className={styles.brandColumn}>
                        <Link className={styles.logoLink} to="/">
                            <BrandLogo />
                            <span>Adam</span>
                        </Link>
                        <p className={styles.brandText}>
                            Full-stack software developer building fast,
                            scalable and beautiful digital products.
                        </p>
                        <div className={styles.socials}>
                            {SOCIAL_LINKS.map((item) => (
                                <a
                                    aria-label={item.label}
                                    className={styles.socialLink}
                                    href={item.href}
                                    key={item.label}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <nav
                        className={styles.navColumn}
                        aria-label="Footer navigation"
                    >
                        <span className={styles.columnTitle}>Navigation</span>
                        {NAVIGATION_ITEMS.map((item) => (
                            <Link
                                className={styles.footerLink}
                                key={item.href}
                                to={item.href}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <nav
                        className={styles.navColumn}
                        aria-label="Footer resources"
                    >
                        <span className={styles.columnTitle}>Resources</span>
                        {RESOURCE_LINKS.map((item) =>
                            item.href.endsWith(".pdf") ? (
                                <a
                                    className={styles.footerLink}
                                    href={item.href}
                                    key={item.href}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <Link
                                    className={styles.footerLink}
                                    key={item.href}
                                    to={item.href}
                                >
                                    {item.label}
                                </Link>
                            ),
                        )}
                    </nav>

                    <div className={styles.ctaColumn}>
                        <span className={styles.columnTitle}>
                            Start a project
                        </span>
                        <p className={styles.brandText}>
                            Currently accepting new freelance projects.
                        </p>
                        <Link className={styles.ctaLink} to="/contact">
                            Get in touch &rarr;
                        </Link>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <span>&copy; {CURRENT_YEAR} Adam. All rights reserved.</span>
                    <span>Built with React &amp; Vite</span>
                </div>
            </Container>
        </footer>
    );
}
