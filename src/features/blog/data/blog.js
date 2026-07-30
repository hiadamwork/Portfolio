export const blogPageContent = {
    hero: {
        title: 'Blog',
        lead: 'Thoughts, tutorials, development insights and engineering lessons from building modern software.',
        description:
            'Sharing practical knowledge about React, Java, software architecture, UI/UX, backend development and performance optimization.',
        primaryAction: {
            label: 'Browse Articles',
            href: '#article-grid',
        },
        secondaryAction: {
            label: 'Subscribe',
            href: '#newsletter',
        },
        status: 'Updated Regularly',
    },
    featured: {
        sectionTitle: 'Featured Article',
        badge: 'Featured',
        readAction: 'Read Article',
        shareAction: 'Share',
        bookmarkAction: 'Bookmark',
    },
    filters: {
        ariaLabel: 'Search and filter articles',
        searchLabel: 'Search articles',
        searchPlaceholder: 'Search articles...',
    },
    articleGrid: {
        title: 'Article Grid',
        ariaLabel: 'Article list',
        readAction: 'Read More',
        authorPrefix: 'By',
    },
    topics: {
        title: 'Popular Topics',
    },
    latest: {
        title: 'Latest Articles',
        badge: 'New',
        eyebrowPrefix: 'Featured',
    },
    series: {
        title: 'Series',
        action: 'Continue Reading',
    },
    newsletter: {
        sectionTitle: 'Newsletter',
        title: 'Stay Updated',
        description: 'Stay updated with animated sassmorphism.',
        emailLabel: 'Email address',
        emailPlaceholder: 'Email',
        submitLabel: 'Subscribe',
    },
    readingExperience: {
        title: 'Reading Experience',
    },
    quote: 'Knowledge grows when it\'s shared.',
    author: {
        sectionTitle: 'Author Section',
        name: "Hi, I'm Adam",
        bio: 'Full-stack software developer sharing practical lessons from building production-minded web applications.',
        links: [
            {
                label: 'About Me',
                href: '/about',
                type: 'internal',
            },
            {
                label: 'GitHub',
                href: 'https://github.com/heyadam05',
                type: 'external',
            },
            {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/adamdlugos',
                type: 'external',
            },
        ],
    },
    cta: {
        title: 'Want to Build Something Similar?',
        description: "Let's build something amazing together.",
        primaryAction: {
            label: 'Start a Project',
            href: '/contact',
        },
        secondaryAction: {
            label: 'Contact Me',
            href: '/contact',
        },
    },
}

export const blogFilters = [
    'All',
    'React',
    'Java',
    'Backend',
    'Frontend',
    'Architecture',
    'Performance',
    'UI/UX',
    'Career',
    'Open Source',
]

export const articles = [
    {
        slug: 'building-scalable-react-architecture',
        title: 'Building Scalable React Architecture for Growing Products',
        excerpt:
            'How feature-based folder structure and clear component boundaries keep large React codebases maintainable.',
        category: 'React',
        date: '2026-02-14',
        readTime: '8 min read',
        author: 'Adam',
        featured: true,
    },
    {
        slug: 'java-spring-boot-clean-apis',
        title: 'Designing Clean REST APIs with Java and Spring Boot',
        excerpt:
            'Practical patterns for request validation, layered services and predictable error handling in Spring Boot.',
        category: 'Java',
        date: '2026-01-28',
        readTime: '10 min read',
        author: 'Adam',
    },
    {
        slug: 'backend-authentication-jwt',
        title: 'Authentication Done Right: JWT, Sessions and Refresh Tokens',
        excerpt:
            'Comparing authentication strategies for modern backend systems and when to use each one.',
        category: 'Backend',
        date: '2026-01-15',
        readTime: '7 min read',
        author: 'Adam',
    },
    {
        slug: 'frontend-performance-checklist',
        title: 'A Practical Frontend Performance Checklist',
        excerpt:
            'The small, high-impact changes that consistently improve real-world React app performance.',
        category: 'Frontend',
        date: '2025-12-20',
        readTime: '6 min read',
        author: 'Adam',
    },
    {
        slug: 'software-architecture-decisions',
        title: 'How I Approach Software Architecture Decisions',
        excerpt:
            'A framework for evaluating trade-offs before committing to an architecture for a new project.',
        category: 'Architecture',
        date: '2025-12-05',
        readTime: '9 min read',
        author: 'Adam',
    },
    {
        slug: 'optimizing-database-queries',
        title: 'Optimizing Database Queries Before You Reach for Caching',
        excerpt:
            'Indexing, query shape and schema decisions that solve performance problems at the source.',
        category: 'Performance',
        date: '2025-11-22',
        readTime: '7 min read',
        author: 'Adam',
    },
    {
        slug: 'designing-interfaces-developers-trust',
        title: 'Designing Interfaces That Feel Trustworthy',
        excerpt:
            'Small UI/UX details that make a product feel premium, reliable and easy to use.',
        category: 'UI/UX',
        date: '2025-11-08',
        readTime: '5 min read',
        author: 'Adam',
    },
    {
        slug: 'freelance-to-fulltime-lessons',
        title: 'Lessons From Freelancing as a Software Developer',
        excerpt:
            'What I learned about client communication, scoping and delivery from freelance projects.',
        category: 'Career',
        date: '2025-10-19',
        readTime: '6 min read',
        author: 'Adam',
    },
    {
        slug: 'contributing-to-open-source',
        title: 'Getting Started with Open Source Contributions',
        excerpt:
            'A practical path for making your first meaningful contribution to an open source project.',
        category: 'Open Source',
        date: '2025-10-02',
        readTime: '5 min read',
        author: 'Adam',
    },
]

export const popularTopics = [
    'React',
    'JavaScript',
    'TypeScript',
    'Java',
    'Spring Boot',
    'Node.js',
    'REST API',
    'Authentication',
    'Performance',
    'Architecture',
    'Docker',
    'Git',
    'PostgreSQL',
    'CSS',
    'Animations',
]

export const learningSeries = [
    {
        title: 'Building Modern React Apps',
        description:
            'A complete series on component design, state management and scalable frontend architecture.',
        articleCount: 6,
        progress: 3,
        icon: 'layout',
    },
    {
        title: 'Backend Engineering',
        description:
            'REST APIs, authentication, databases and production-ready Java and Node.js services.',
        articleCount: 5,
        progress: 2,
        icon: 'server',
    },
    {
        title: 'Software Architecture',
        description:
            'Practical architecture decisions for systems that need to scale and stay maintainable.',
        articleCount: 4,
        progress: 1,
        icon: 'network',
    },
]

export const readingBenefits = [
    { label: 'Clean formatting', icon: 'layout' },
    { label: 'Code examples', icon: 'code' },
    { label: 'Practical tutorials', icon: 'bookOpen' },
    { label: 'Real project examples', icon: 'briefcase' },
    { label: 'Performance tips', icon: 'gauge' },
    { label: 'Modern architecture', icon: 'network' },
]
