import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ScrollToTop } from '@/components'
import { MainLayout } from "@/layouts/MainLayout";
import { AboutPage } from "@/features/about";
import { BlogDetailPage, BlogPage } from "@/features/blog";
import { ContactPage } from "@/features/contact";
import { HomePage } from "@/features/home";
import { NotFoundPage } from "@/features/not-found/NotFoundPage";
import { ProjectDetailPage, ProjectsPage } from '@/features/projects'
import { ServicesPage } from "@/features/services";
import { ROUTES } from "@/app/router/routes";

export function AppRouter() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <MainLayout>
                <Routes>
                    <Route element={<HomePage />} path={ROUTES.home} />
                    <Route element={<ProjectsPage />} path={ROUTES.projects} />
                    <Route
                        element={<ProjectDetailPage />}
                        path={ROUTES.projectDetail}
                    />
                    <Route element={<ServicesPage />} path={ROUTES.services} />
                    <Route element={<AboutPage />} path={ROUTES.about} />
                    <Route element={<BlogPage />} path={ROUTES.blog} />
                    <Route
                        element={<BlogDetailPage />}
                        path={ROUTES.blogDetail}
                    />
                    <Route element={<ContactPage />} path={ROUTES.contact} />
                    <Route element={<NotFoundPage />} path={ROUTES.notFound} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}
