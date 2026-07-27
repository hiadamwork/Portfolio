import { useEffect, useState } from "react";

import { NAVIGATION_ITEMS } from "@/app/router/routes";
import { BrandLogo, GithubIcon, LinkedinIcon } from "@/components/icons";

import styles from "./SiteHeader.module.css";

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/heyadam05",
        icon: <GithubIcon />,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/adamdlugos",
        icon: <LinkedinIcon />,
    },
];

export function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [pathname, setPathname] = useState(
        typeof window !== "undefined" ? window.location.pathname : "/",
    );

    useEffect(() => {
        const updatePathname = () => setPathname(window.location.pathname);

        updatePathname();
        window.addEventListener("popstate", updatePathname);
        window.addEventListener("hashchange", updatePathname);

        return () => {
            window.removeEventListener("popstate", updatePathname);
            window.removeEventListener("hashchange", updatePathname);
        };
    }, []);

    const getIsActive = (href) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(href);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.navbar} aria-label="Primary navigation">
                <a
                    className={styles.logoLink}
                    href="/"
                    aria-label="Adam portfolio home"
                >
                    <BrandLogo />
                </a>

                <button
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation menu"
                    className={styles.menuButton}
                    onClick={() => setIsMenuOpen((open) => !open)}
                    type="button"
                >
                    <span />
                    <span />
                    <span />
                </button>

                <div className={styles.navLinks}>
                    {NAVIGATION_ITEMS.map((item) => (
                        <a
                            className={
                                getIsActive(item.href)
                                    ? styles.activeLink
                                    : styles.navLink
                            }
                            href={item.href}
                            key={item.href}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className={styles.actions}>
                    {socialLinks.map((item) => (
                        <a
                            aria-label={item.label}
                            className={styles.iconLink}
                            href={item.href}
                            key={item.label}
                            onClick={() => setIsMenuOpen(false)}
                            rel="noreferrer"
                            target="_blank"
                        >
                            {item.icon}
                        </a>
                    ))}

                    <a
                        className={styles.cvLink}
                        href="/Adam-CV.pdf"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Download CV
                    </a>
                </div>

                {isMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <div className={styles.mobileNavLinks}>
                            {NAVIGATION_ITEMS.map((item) => (
                                <a
                                    className={
                                        getIsActive(item.href)
                                            ? styles.mobileActiveLink
                                            : styles.mobileNavLink
                                    }
                                    href={item.href}
                                    key={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        <div className={styles.mobileActions}>
                            {socialLinks.map((item) => (
                                <a
                                    aria-label={item.label}
                                    className={styles.mobileIconLink}
                                    href={item.href}
                                    key={item.label}
                                    onClick={() => setIsMenuOpen(false)}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    {item.icon}
                                </a>
                            ))}
                            <a
                                className={styles.mobileCvLink}
                                href="/Adam-CV.pdf"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
