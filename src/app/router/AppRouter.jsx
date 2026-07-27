import { useEffect, useState } from "react";

import { MainLayout } from "@/layouts/MainLayout";
import { AboutPage } from "@/features/about/AboutPage";
import { ContactPage } from "@/features/contact/ContactPage";
import { HomePage } from "@/features/home/HomePage";
import { ProjectDetailPage } from "@/features/projects/components/ProjectDetailPage";
import { ProjectsPage } from "@/features/projects/components/ProjectsPage";

export function AppRouter() {
    const [location, setLocation] = useState({
        hash: window.location.hash,
        pathname: window.location.pathname,
    });

    useEffect(() => {
        const handleLocationChange = () => {
            setLocation({
                hash: window.location.hash,
                pathname: window.location.pathname,
            });
        };

        window.addEventListener("hashchange", handleLocationChange);
        window.addEventListener("popstate", handleLocationChange);

        return () => {
            window.removeEventListener("hashchange", handleLocationChange);
            window.removeEventListener("popstate", handleLocationChange);
        };
    }, []);

    const { hash, pathname } = location;
    const isProjectsIndex =
        pathname === "/projects" || pathname === "/projects/";
    const detailSlug = (() => {
        if (hash.startsWith("#") && hash.length > 1) {
            return hash.slice(1);
        }

        const segments = pathname.split("/").filter(Boolean);
        if (segments[0] === "projects" && segments[1]) {
            return segments[1];
        }

        return null;
    })();

    const page = (() => {
        if (
            (pathname.startsWith("/projects/") && pathname !== "/projects/") ||
            (isProjectsIndex && hash.length > 1)
        ) {
            return <ProjectDetailPage slug={detailSlug} />;
        }

        if (pathname === "/projects") {
            return <ProjectsPage />;
        }

        if (pathname === "/about") {
            return <AboutPage />;
        }

        if (pathname === "/contact") {
            return <ContactPage />;
        }

        return <HomePage />;
    })();

    return <MainLayout>{page}</MainLayout>;
}
