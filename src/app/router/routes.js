export const ROUTES = {
    home: '/',
    projects: '/projects',
    projectDetail: '/projects/:slug',
    services: '/services',
    about: '/about',
    blog: '/blog',
    blogDetail: '/blog/:slug',
    contact: '/contact',
    notFound: '*',
}

export const NAVIGATION_ITEMS = [
    { label: 'Home', href: ROUTES.home },
    { label: 'Projects', href: ROUTES.projects },
    { label: 'Services', href: ROUTES.services },
    { label: 'About', href: ROUTES.about },
    { label: 'Blog', href: ROUTES.blog },
    { label: 'Contact', href: ROUTES.contact },
]

export function buildProjectDetailPath(slug) {
    return `/projects/${slug}`
}

export function buildBlogDetailPath(slug) {
    return `/blog/${slug}`
}
