import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { NAVIGATION_ITEMS } from "@/app/router/routes";
import { BrandLogo, Button, DynamicIcon } from "@/components";
import { cx } from "@/utils/cx";

import styles from "./SiteHeader.module.css";

const SOCIAL_LINKS = [
    {
        label: "GitHub",
        href: "https://github.com/hiadamwork",
        icon: <DynamicIcon name="github" />,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/adamwork",
        icon: <DynamicIcon name="linkedin" />,
    },
];

export function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleCloseMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <nav className={styles.navbar} aria-label="Primary navigation">
                <Link
                    className={styles.logoLink}
                    to="/"
                    aria-label="Adam portfolio home"
                >
                    <BrandLogo />
                </Link>

                <Button
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation menu"
                    className={styles.menuButton}
                    onClick={() => setIsMenuOpen((open) => !open)}
                    size="xs"
                    type="button"
                    variant="ghost"
                >
                    <span />
                    <span />
                    <span />
                </Button>

                <div className={styles.navLinks}>
                    {NAVIGATION_ITEMS.map((item) => (
                        <NavLink
                            className={({ isActive }) =>
                                cx(
                                    styles.navLink,
                                    isActive && styles.activeLink,
                                )
                            }
                            end={item.href === "/"}
                            key={item.href}
                            to={item.href}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                <div className={styles.actions}>
                    {SOCIAL_LINKS.map((item) => (
                        <a
                            aria-label={item.label}
                            className={styles.iconLink}
                            href={item.href}
                            key={item.label}
                            rel="noreferrer"
                            target="_blank"
                        >
                            {item.icon}
                        </a>
                    ))}

                    <a className={styles.cvLink} href="/Adam-CV.pdf">
                        Download CV
                    </a>
                </div>

                {isMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <div className={styles.mobileNavLinks}>
                            {NAVIGATION_ITEMS.map((item) => (
                                <NavLink
                                    className={({ isActive }) =>
                                        cx(
                                            styles.mobileNavLink,
                                            isActive && styles.mobileActiveLink,
                                        )
                                    }
                                    end={item.href === "/"}
                                    key={item.href}
                                    onClick={handleCloseMenu}
                                    to={item.href}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>

                        <div className={styles.mobileActions}>
                            {SOCIAL_LINKS.map((item) => (
                                <a
                                    aria-label={item.label}
                                    className={styles.mobileIconLink}
                                    href={item.href}
                                    key={item.label}
                                    onClick={handleCloseMenu}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    {item.icon}
                                </a>
                            ))}
                            <a
                                className={styles.mobileCvLink}
                                href="/Adam-CV.pdf"
                                onClick={handleCloseMenu}
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
