export const projectStats = [
    { value: "12+", label: "Completed Projects" },
    { value: "5+", label: "Technologies" },
    { value: "100%", label: "Responsive" },
    { value: "↗", label: "Fast Loading" },
];

export const projectFilters = [
    "All",
    "React",
    "Java",
    "Backend",
    "Frontend",
    "Desktop",
    "Open Source",
];

export const stackPills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Node.js",
    "Express",
    "PostgreSQL",
    "SQLite",
    "Git",
    "GitHub",
    "Docker",
    "REST API",
    "JWT",
    "CSS Modules",
];

const baseTimeline = [
    "Planning",
    "UI Design",
    "Development",
    "Testing",
    "Deployment",
    "Maintenance",
];

const basePerformance = [
    { value: "100", label: "Performance" },
    { value: "99", label: "Accessibility" },
    { value: "100", label: "SEO" },
    { value: "100", label: "Best Practices" },
];

export const processSteps = [
    {
        title: "Planning",
        description:
            "Requirements, scope and product flows mapped before development starts.",
    },
    {
        title: "Architecture",
        description:
            "Scalable frontend and backend boundaries designed around maintainability.",
    },
    {
        title: "Development",
        description:
            "Clean implementation with reusable components and focused service layers.",
    },
];

export const projects = [
    {
        title: "AI Project Management Platform",
        shortTitle: "AI Platform",
        slug: "ai-project-management-platform",
        description:
            "A scalable SaaS platform designed to simplify project management using modern frontend architecture and backend APIs.",
        categories: ["React", "Backend", "Frontend"],
        role: "Full Stack Developer",
        duration: "3 Months",
        platform: "Web Application",
        status: "Production Ready",
        tags: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma",
            "REST API",
            "JWT",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Teams needed a clearer way to manage projects, tasks and delivery status without jumping across fragmented tools.",
            solution:
                "I designed a SaaS dashboard with isolated React features, predictable REST APIs and reusable UI primitives.",
            goals: "Improve planning clarity, reduce operational friction and create a premium workspace for product teams.",
            result: "The final product feels fast, polished and structured enough for production workflows.",
        },
        features: [
            "Authentication",
            "Dashboard",
            "Analytics",
            "Responsive Design",
            "Notifications",
            "Dark Mode",
            "REST API",
            "Admin Panel",
        ],
        architecture: [
            "React UI",
            "REST API",
            "Node.js",
            "PostgreSQL",
            "Cloud",
        ],
        techStack: [
            {
                label: "Frontend",
                items: ["React", "TypeScript", "CSS Modules"],
            },
            {
                label: "Backend",
                items: ["Node.js", "Express", "JWT", "Prisma"],
            },
            { label: "Database", items: ["PostgreSQL"] },
            { label: "Tools", items: ["GitHub", "Docker", "Vercel"] },
        ],
        challenges: [
            {
                title: "Dashboard Clarity",
                label: "Problem",
                description: "Complex project data needed to stay scannable.",
            },
            {
                title: "Feature Boundaries",
                label: "Thinking",
                description:
                    "Each workflow was separated into focused modules.",
            },
            {
                title: "Reusable UI",
                label: "Implementation",
                description:
                    "Cards, badges and layouts were shared across views.",
            },
            {
                title: "API Shape",
                label: "Testing",
                description:
                    "Consistent responses made frontend states easier to manage.",
            },
            {
                title: "Production Feel",
                label: "Result",
                description:
                    "The app stayed responsive and premium across screen sizes.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
    },
    {
        title: "E-commerce Backend",
        slug: "e-commerce-backend",
        description:
            "Robust order, product and checkout services for a modern commerce dashboard.",
        categories: ["Java", "Backend"],
        role: "Backend Developer",
        duration: "2 Months",
        platform: "REST API",
        status: "Production Ready",
        tags: ["Java", "Spring Boot", "PostgreSQL", "REST API", "JWT"],
        variant: "commerce",
        overview: {
            problem:
                "The store needed reliable inventory, checkout and order workflows that could handle growth.",
            solution:
                "I built a Spring Boot API with clear service layers, validation and secure authentication.",
            goals: "Create predictable endpoints, reduce checkout errors and make future integrations simple.",
            result: "The backend became easier to maintain and ready for frontend dashboard consumption.",
        },
        features: [
            "Product API",
            "Order Management",
            "Authentication",
            "Inventory",
            "Checkout Flow",
            "Admin Panel",
        ],
        architecture: [
            "Client App",
            "REST API",
            "Spring Boot",
            "PostgreSQL",
            "Deployment",
        ],
        techStack: [
            {
                label: "Backend",
                items: ["Java", "Spring Boot", "JWT", "REST API"],
            },
            { label: "Database", items: ["PostgreSQL"] },
            { label: "Tools", items: ["Git", "Docker"] },
        ],
        challenges: [
            {
                title: "Inventory Rules",
                label: "Problem",
                description:
                    "Stock updates had to stay consistent during checkout.",
            },
            {
                title: "Service Design",
                label: "Thinking",
                description: "Business logic was kept outside controllers.",
            },
            {
                title: "Validation",
                label: "Implementation",
                description:
                    "Request checks protect the API from invalid states.",
            },
            {
                title: "Security",
                label: "Testing",
                description:
                    "JWT-protected endpoints limit sensitive operations.",
            },
            {
                title: "Maintainability",
                label: "Result",
                description: "The API is structured for long-term growth.",
            },
        ],
        performance: basePerformance,
        timeline: [
            "Planning",
            "Database Design",
            "API Development",
            "Testing",
            "Deployment",
        ],
    },
    {
        title: "Data Visualization Tool",
        slug: "data-visualization-tool",
        description:
            "Analytics interface with live charts, clean data tables and reporting workflows.",
        categories: ["React", "Java", "Backend", "Frontend"],
        role: "Full Stack Developer",
        duration: "6 Weeks",
        platform: "Analytics Dashboard",
        status: "Delivered",
        tags: ["React", "Java", "Spring Boot", "PostgreSQL"],
        variant: "analytics",
        overview: {
            problem:
                "Business metrics were hard to compare because reports lived in disconnected spreadsheets.",
            solution:
                "I created a dashboard that turns API data into clear charts, cards and reporting tables.",
            goals: "Make trends easier to understand and reduce manual reporting time.",
            result: "Users can scan performance quickly and drill into key metrics with less friction.",
        },
        features: [
            "Charts",
            "Filters",
            "Data Tables",
            "Export Views",
            "Responsive Design",
            "Backend API",
        ],
        architecture: [
            "React Dashboard",
            "REST API",
            "Java Services",
            "PostgreSQL",
            "Reports",
        ],
        techStack: [
            { label: "Frontend", items: ["React", "CSS Modules"] },
            { label: "Backend", items: ["Java", "Spring Boot", "REST API"] },
            { label: "Database", items: ["PostgreSQL"] },
        ],
        challenges: [
            {
                title: "Data Density",
                label: "Problem",
                description:
                    "Charts needed to show a lot without feeling heavy.",
            },
            {
                title: "Hierarchy",
                label: "Thinking",
                description:
                    "Important metrics were grouped into clear sections.",
            },
            {
                title: "Reusable Cards",
                label: "Implementation",
                description: "Dashboard components share consistent structure.",
            },
            {
                title: "Responsiveness",
                label: "Testing",
                description: "Tables and cards adapt across viewport sizes.",
            },
            {
                title: "Insight Speed",
                label: "Result",
                description: "The dashboard makes metric review much faster.",
            },
        ],
        performance: basePerformance,
        timeline: [
            "Discovery",
            "Data Model",
            "Dashboard UI",
            "API Integration",
            "QA",
        ],
    },
    {
        title: "Team Collaboration",
        slug: "team-collaboration",
        description:
            "Workspace product with boards, messages and lightweight project operations.",
        categories: ["React", "Frontend"],
        role: "Frontend Developer",
        duration: "5 Weeks",
        platform: "Web Application",
        status: "Prototype Ready",
        tags: ["React", "GitHub", "CSS", "TypeScript"],
        variant: "terminal",
        overview: {
            problem:
                "Small teams needed a focused collaboration surface without enterprise complexity.",
            solution:
                "I built a clean workspace UI with boards, activity cards and project-focused navigation.",
            goals: "Keep team updates visible and make repeated workflows feel effortless.",
            result: "The interface feels lightweight, modern and easy to extend.",
        },
        features: [
            "Boards",
            "Activity Feed",
            "Team Cards",
            "Responsive UI",
            "Dark Mode",
        ],
        architecture: [
            "React UI",
            "State Layer",
            "Component System",
            "Static Data",
            "Hosting",
        ],
        techStack: [
            {
                label: "Frontend",
                items: ["React", "TypeScript", "CSS Modules"],
            },
            { label: "Tools", items: ["GitHub", "Vercel"] },
        ],
        challenges: [
            {
                title: "Workflow Focus",
                label: "Problem",
                description: "The product needed to avoid visual clutter.",
            },
            {
                title: "Layout System",
                label: "Thinking",
                description: "Cards and sections use predictable spacing.",
            },
            {
                title: "Interactions",
                label: "Implementation",
                description: "Hover states make the UI feel responsive.",
            },
            {
                title: "Scalability",
                label: "Testing",
                description: "Components support future real-time data.",
            },
            {
                title: "Polish",
                label: "Result",
                description:
                    "The prototype communicates a premium product direction.",
            },
        ],
        performance: basePerformance,
        timeline: [
            "Concept",
            "Wireframe",
            "UI Build",
            "Interaction Pass",
            "Review",
        ],
    },
    {
        title: "Desktop Finance App",
        slug: "desktop-finance-app",
        description:
            "Desktop-style portfolio tracker with secure account insights and trend views.",
        categories: ["Java", "Desktop"],
        role: "Java Developer",
        duration: "4 Weeks",
        platform: "Desktop Application",
        status: "Completed",
        tags: ["Java", "SQLite", "Desktop"],
        variant: "finance",
        overview: {
            problem:
                "Personal finance tracking needed to work offline with clear summaries and local persistence.",
            solution:
                "I built a desktop application with SQLite storage, portfolio views and simple account tracking.",
            goals: "Provide fast local workflows and make finance data easy to inspect.",
            result: "The app gives users a private, practical way to review spending and portfolio changes.",
        },
        features: [
            "Local Storage",
            "Portfolio Views",
            "Charts",
            "Account Tracking",
            "Desktop UI",
        ],
        architecture: [
            "Desktop UI",
            "Service Layer",
            "Java Core",
            "SQLite",
            "Local Files",
        ],
        techStack: [
            { label: "Application", items: ["Java", "Desktop"] },
            { label: "Database", items: ["SQLite"] },
            { label: "Tools", items: ["Git"] },
        ],
        challenges: [
            {
                title: "Offline First",
                label: "Problem",
                description: "Data had to remain usable without a network.",
            },
            {
                title: "Local Model",
                label: "Thinking",
                description: "SQLite keeps persistence simple and reliable.",
            },
            {
                title: "UI States",
                label: "Implementation",
                description: "Screens focus on quick portfolio review.",
            },
            {
                title: "Data Safety",
                label: "Testing",
                description: "Local records are handled predictably.",
            },
            {
                title: "Practicality",
                label: "Result",
                description: "The app works as a fast personal finance tool.",
            },
        ],
        performance: basePerformance,
        timeline: [
            "Planning",
            "Local Model",
            "Desktop UI",
            "Testing",
            "Packaging",
        ],
    },
    {
        title: "Open Source UI Kit",
        slug: "open-source-ui-kit",
        description:
            "Reusable glassmorphism component library with tokens and interaction patterns.",
        categories: ["React", "Frontend", "Open Source"],
        role: "Frontend Developer",
        duration: "3 Weeks",
        platform: "Component Library",
        status: "Open Source",
        tags: ["React", "CSS Modules", "Design System"],
        variant: "kit",
        overview: {
            problem:
                "Repeated UI work needed a reusable foundation with consistent tokens and polished interactions.",
            solution:
                "I created a component kit with buttons, badges, cards and responsive layout primitives.",
            goals: "Speed up future builds while keeping visual quality consistent.",
            result: "The UI kit became a reusable base for premium portfolio and product pages.",
        },
        features: [
            "Buttons",
            "Cards",
            "Badges",
            "Design Tokens",
            "CSS Modules",
            "Responsive Layout",
        ],
        architecture: [
            "Tokens",
            "UI Primitives",
            "Components",
            "Feature Usage",
            "Docs",
        ],
        techStack: [
            { label: "Frontend", items: ["React", "CSS Modules"] },
            { label: "Design", items: ["Design System"] },
            { label: "Tools", items: ["GitHub"] },
        ],
        challenges: [
            {
                title: "Consistency",
                label: "Problem",
                description: "Components had to feel like one product.",
            },
            {
                title: "Token System",
                label: "Thinking",
                description: "Colors, radius and spacing live globally.",
            },
            {
                title: "Composition",
                label: "Implementation",
                description: "Small primitives combine into feature UI.",
            },
            {
                title: "Responsiveness",
                label: "Testing",
                description: "Components adapt without layout surprises.",
            },
            {
                title: "Reuse",
                label: "Result",
                description: "New pages can be built faster and cleaner.",
            },
        ],
        performance: basePerformance,
        timeline: ["Audit", "Tokens", "Components", "Examples", "Release"],
    },
    {
        title: "REST API Platform",
        slug: "rest-api-platform",
        description:
            "JWT-secured backend foundation for dashboards, public APIs and admin tools.",
        categories: ["Backend"],
        role: "Backend Developer",
        duration: "5 Weeks",
        platform: "API Platform",
        status: "Production Ready",
        tags: ["Node.js", "Express", "PostgreSQL", "JWT", "REST API"],
        variant: "api",
        overview: {
            problem:
                "Multiple frontend products needed a reliable API foundation with auth and consistent responses.",
            solution:
                "I built an Express REST API with JWT authentication, validation and clean service boundaries.",
            goals: "Make backend integrations predictable, secure and easy to extend.",
            result: "The platform provides a reusable API base for dashboards and admin workflows.",
        },
        features: [
            "JWT Auth",
            "REST Endpoints",
            "Validation",
            "PostgreSQL",
            "Error Handling",
            "Admin Ready",
        ],
        architecture: [
            "Client",
            "Express API",
            "Service Layer",
            "PostgreSQL",
            "Deployment",
        ],
        techStack: [
            {
                label: "Backend",
                items: ["Node.js", "Express", "JWT", "REST API"],
            },
            { label: "Database", items: ["PostgreSQL"] },
            { label: "Tools", items: ["Docker", "GitHub"] },
        ],
        challenges: [
            {
                title: "API Consistency",
                label: "Problem",
                description:
                    "Frontends needed predictable success and error shapes.",
            },
            {
                title: "Security",
                label: "Thinking",
                description: "JWT protects admin and user-specific operations.",
            },
            {
                title: "Service Layer",
                label: "Implementation",
                description: "Controllers stay thin and easy to test.",
            },
            {
                title: "Validation",
                label: "Testing",
                description:
                    "Bad input is rejected before business logic runs.",
            },
            {
                title: "Foundation",
                label: "Result",
                description: "The API is ready for future products.",
            },
        ],
        performance: basePerformance,
        timeline: [
            "Requirements",
            "API Design",
            "Auth",
            "Validation",
            "Deployment",
        ],
    },
];

/*export const featuredProject = projects[0];

export const architectureNodes = featuredProject.architecture;
export const challengeCards = featuredProject.challenges;
export const performanceMetrics = featuredProject.performance;
export const projectFeatures = featuredProject.features.map((feature) => ({
    title: feature,
    description: `A core capability built into ${featuredProject.title}.`,
}));
export const projectInfo = [
    { label: "Role", value: featuredProject.role },
    { label: "Duration", value: featuredProject.duration },
    { label: "Platform", value: featuredProject.platform },
    { label: "Status", value: featuredProject.status },
];
export const techStackGroups = featuredProject.techStack;
export const timelineSteps = featuredProject.timeline;*/

export const newProject = projects[0];

export const getProjectBySlug = (slug) =>
    projects.find((project) => project.slug === slug);

export const getRelatedProjects = (activeProject) =>
    projects
        .filter((project) => project.slug !== activeProject.slug)
        .slice(0, 3);
