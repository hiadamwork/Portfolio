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

export const projectsPageContent = {
    hero: {
        title: "Featured Projects",
        description:
            "A collection of carefully crafted applications focused on performance, user experience and scalable architecture.",
    },
    featured: {
        description:
            "Full-stack software developer specializing in React, modern backend systems and scalable architecture.",
        actions: {
            live: "Live Demo",
            github: "GitHub",
            caseStudy: "Case Study",
        },
    },
    filters: {
        ariaLabel: "Project filters",
    },
    grid: {
        ariaLabel: "Project cards",
        emptyTitle: "No projects found",
        emptyDescription:
            "No projects match this filter yet. Try selecting a different category.",
    },
    caseStudy: {
        eyebrow: "Case Study",
        title: "How I build software.",
    },
    github: {
        contributionTitle: "Contribution preview",
        contributionDescription:
            "Adam pushed production-ready improvements to dashboard cards.",
        contributionLink: "View contribution preview",
        repositoryTitle: "Repository",
        repositories: [
            "modern-cards",
            "reusable-components",
            "contribution-graph",
        ],
        commitsTitle: "Latest commits",
    },
};

export const processSteps = [
    {
        title: "Planning",
        icon: "target",
        description:
            "Requirements, scope and product flows mapped before development starts.",
    },
    {
        title: "Architecture",
        icon: "network",
        description:
            "Scalable frontend and backend boundaries designed around maintainability.",
    },
    {
        title: "Development",
        icon: "code",
        description:
            "Clean implementation with reusable components and focused service layers.",
    },
    {
        title: "Testing & QA",
        icon: "check-circle",
        description:
            "Automated unit testing, edge case handling, and smooth user flow verification.",
    },
    {
        title: "Deployment & Support",
        icon: "rocket",
        description:
            "CI/CD setup, production monitoring, and long-term optimization.",
    },
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

export const projects = [
    {
        title: "DevVault",
        shortTitle: "DevVault",
        slug: "devvault",
        description:
            "A command-line C++ application for keeping a personal archive of software projects. Helps you add, search, filter, archive, mark favorites, view statistics, export reports, and create backups.",
        categories: ["C++", "CLI", "Desktop", "Open Source"],
        role: "Developer",
        duration: "2 Months",
        platform: "Command-Line Application",
        status: "Production Ready",
        tags: [
            "C++17",
            "JSON Lines",
            "CMake",
            "File System",
            "CLI",
            "Project Management",
            "Archive",
            "Backup",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Developers needed a simple, local way to archive and organize their software projects without relying on cloud services.",
            solution:
                "I built a lightweight CLI tool that stores project metadata in JSON Lines format, with full CRUD, search, filtering, and export capabilities.",
            goals:
                "Create a fast, portable project archive that works offline and keeps data in a human-readable format.",
            result:
                "A professional CLI tool with dashboard statistics, backup support, and comprehensive project management features.",
        },
        features: [
            "CRUD Operations",
            "Search & Filter",
            "Archive & Favorites",
            "Dashboard Statistics",
            "JSON Lines Export",
            "CSV Export",
            "Markdown Export",
            "Backup & Restore",
            "Activity Logging",
        ],
        architecture: [
            "C++ Core",
            "JSON Lines Storage",
            "File System I/O",
            "CLI Interface",
            "CMake Build",
        ],
        techStack: [
            { label: "Language", items: ["C++17"] },
            { label: "Build", items: ["CMake", "MinGW", "G++"] },
            { label: "Data", items: ["JSON Lines", "File System"] },
            { label: "Testing", items: ["Custom Tests"] },
        ],
        challenges: [
            {
                title: "Data Persistence",
                label: "Problem",
                description: "Needed a simple, append-friendly storage format.",
            },
            {
                title: "JSON Lines",
                label: "Solution",
                description:
                    "Chose JSON Lines for easy manual inspection and append operations.",
            },
            {
                title: "CLI Usability",
                label: "Challenge",
                description:
                    "Made commands intuitive with help text and interactive prompts.",
            },
            {
                title: "Cross-Platform",
                label: "Approach",
                description:
                    "Used C++17 standard library for maximum portability.",
            },
            {
                title: "Testing",
                label: "Result",
                description:
                    "Full test suite covering persistence, search, filters, and exports.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-01-15",
        githubUrl: "https://github.com/hiadamwork/DevVault",
    },

    {
        title: "Download Manager",
        shortTitle: "Download Mgr",
        slug: "download-manager",
        description:
            "A Windows WPF desktop application built with C# and .NET 10. Manages file downloads, queues, history, statistics, settings, and local SQLite persistence through a practical dashboard-style UI.",
        categories: ["C#", "WPF", "Desktop", "Open Source"],
        role: "Full Stack Developer",
        duration: "3 Months",
        platform: "Windows Desktop Application",
        status: "Production Ready",
        tags: [
            "C#",
            ".NET 10",
            "WPF",
            "MVVM",
            "Entity Framework Core",
            "SQLite",
            "HttpClient",
            "xUnit",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Windows lacked a modern, queue-aware download manager with pause/resume support and a clean dashboard interface.",
            solution:
                "Built a WPF application with MVVM architecture, SQLite persistence, and HTTP Range request support for partial downloads.",
            goals:
                "Provide a reliable download manager with queue management, retry logic, and comprehensive history tracking.",
            result:
                "A polished desktop app with active download limits, pause/resume, retry, and detailed download statistics.",
        },
        features: [
            "HTTP/HTTPS Downloads",
            "Queue Management",
            "Pause & Resume",
            "Retry with Delay",
            "Search & Filter",
            "Dashboard Statistics",
            "SQLite Persistence",
            "Export History",
            "Open File & Folder",
        ],
        architecture: [
            "WPF UI",
            "MVVM Pattern",
            "Entity Framework Core",
            "SQLite Database",
            "HttpClient",
        ],
        techStack: [
            { label: "Language", items: ["C#"] },
            { label: "Framework", items: [".NET 10", "WPF", "Entity Framework Core"] },
            { label: "Database", items: ["SQLite"] },
            { label: "Testing", items: ["xUnit"] },
        ],
        challenges: [
            {
                title: "Resume Support",
                label: "Challenge",
                description: "Implemented HTTP Range requests for partial downloads.",
            },
            {
                title: "Queue Management",
                label: "Solution",
                description: "Active download limit with automatic queuing.",
            },
            {
                title: "MVVM Structure",
                label: "Design",
                description: "Separated concerns with CommunityToolkit.Mvvm.",
            },
            {
                title: "UI Responsiveness",
                label: "Approach",
                description: "Async downloads with progress updates on the UI thread.",
            },
            {
                title: "Data Persistence",
                label: "Result",
                description: "SQLite stores downloads, settings, and history reliably.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-02-01",
        githubUrl: "https://github.com/hiadamwork/DownloadManager",
    },

    {
        title: "FocusFlow",
        shortTitle: "FocusFlow",
        slug: "focusflow",
        description:
            "A Windows WPF desktop productivity app built with C#, MVVM, Entity Framework Core, and SQLite. Combines focus sessions, task tracking, projects, goals, statistics, and session history in one local desktop dashboard.",
        categories: ["C#", "WPF", "Desktop", "Open Source"],
        role: "Developer",
        duration: "2 Months",
        platform: "Windows Desktop Application",
        status: "Production Ready",
        tags: [
            "C#",
            ".NET 10",
            "WPF",
            "MVVM",
            "Entity Framework Core",
            "SQLite",
            "Pomodoro",
            "Productivity",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Staying focused and tracking productivity required switching between multiple tools and apps.",
            solution:
                "Created an all-in-one desktop app with a Pomodoro timer, task management, project tracking, and detailed productivity statistics.",
            goals:
                "Help users improve focus, track completed tasks, and visualize productivity trends.",
            result:
                "A comprehensive productivity suite with streaks, daily progress, focus score, and session history.",
        },
        features: [
            "Pomodoro Timer",
            "Task Management",
            "Project Tracking",
            "Goals & Streaks",
            "Dashboard Statistics",
            "Session History",
            "Settings & Notifications",
            "Always-on-Top Mode",
            "Smoke Test Mode",
        ],
        architecture: [
            "WPF UI",
            "MVVM Pattern",
            "Entity Framework Core",
            "SQLite Database",
            "Command Pattern",
        ],
        techStack: [
            { label: "Language", items: ["C#"] },
            { label: "Framework", items: [".NET 10", "WPF", "Entity Framework Core"] },
            { label: "Database", items: ["SQLite"] },
            { label: "Tools", items: ["Visual Studio", "dotnet"] },
        ],
        challenges: [
            {
                title: "Timer Accuracy",
                label: "Challenge",
                description: "Ensured precise timing with background threads and UI sync.",
            },
            {
                title: "Session Flow",
                label: "Design",
                description: "Auto-switch between Focus, Short Break, and Long Break.",
            },
            {
                title: "Data Relationships",
                label: "Solution",
                description: "EF Core managed task-project-goal relationships.",
            },
            {
                title: "UI Clarity",
                label: "Approach",
                description: "Dashboard shows daily progress, streak, and focus score.",
            },
            {
                title: "Testing",
                label: "Result",
                description: "Smoke test validates core features without opening the UI.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-03-01",
        githubUrl: "https://github.com/hiadamwork/FocusFlow",
    },

    {
        title: "Habit Tracker",
        shortTitle: "Habit Tracker",
        slug: "habit-tracker",
        description:
            "A modern, responsive habit-tracking application built with React and TypeScript. Helps users create routines, record daily progress, maintain streaks, review calendar history, and understand long-term completion trends.",
        categories: ["React", "Frontend", "TypeScript", "Open Source"],
        role: "Frontend Developer",
        duration: "3 Months",
        platform: "Web Application",
        status: "Production Ready",
        tags: [
            "React 19",
            "TypeScript",
            "Vite",
            "Zustand",
            "date-fns",
            "Recharts",
            "Framer Motion",
            "Lucide React",
            "React Hot Toast",
            "Zod",
            "Vitest",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Building and maintaining habits required a simple, visual way to track daily progress and see long-term trends.",
            solution:
                "Developed a local-first React app with calendar views, streaks, completion rates, and customizable habit schedules.",
            goals:
                "Provide an intuitive habit tracker with responsive design, theming, and data persistence in the browser.",
            result:
                "A polished habit tracker with dynamic dashboard, weekly charts, and robust import/export with Zod validation.",
        },
        features: [
            "Create & Edit Habits",
            "Daily Completion Tracking",
            "Streak Calculation",
            "Monthly Calendar",
            "Weekly Progress Chart",
            "Dashboard Statistics",
            "Light & Dark Themes",
            "Accent Colors",
            "JSON Import/Export",
            "Browser Notifications",
            "Responsive Design",
        ],
        architecture: [
            "React UI",
            "Zustand State",
            "Local Storage",
            "React Router",
            "Vite Build",
        ],
        techStack: [
            { label: "Frontend", items: ["React 19", "TypeScript", "Vite"] },
            { label: "State", items: ["Zustand"] },
            { label: "UI", items: ["Framer Motion", "Lucide React", "Recharts"] },
            { label: "Testing", items: ["Vitest", "React Testing Library"] },
            { label: "Tools", items: ["ESLint", "Prettier", "date-fns", "Zod"] },
        ],
        challenges: [
            {
                title: "Streak Accuracy",
                label: "Challenge",
                description: "Streaks had to account only for scheduled days.",
            },
            {
                title: "Calendar Rendering",
                label: "Solution",
                description: "Used date-fns for consistent date handling.",
            },
            {
                title: "Data Persistence",
                label: "Approach",
                description: "Local-first with JSON import/export and Zod validation.",
            },
            {
                title: "UI Responsiveness",
                label: "Implementation",
                description: "Mobile-first layout with progressive enhancement.",
            },
            {
                title: "Notifications",
                label: "Result",
                description: "Browser reminders and streak-risk alerts.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-04-01",
        githubUrl: "https://github.com/hiadamwork/HabitTracker",
        liveUrl: "https://heyhabittracker.netlify.app/",
    },

    {
        title: "LanLink",
        shortTitle: "LanLink",
        slug: "lanlink",
        description:
            "A Windows WPF desktop messenger for local networks. Demonstrates client-server architecture, TCP socket communication, JSON message framing, MVVM-style UI structure, SQLite history storage, and a small real-time network monitor.",
        categories: ["C#", "WPF", "Desktop"],
        role: "Developer",
        duration: "2 Months",
        platform: "Windows Desktop Application",
        status: "Production Ready",
        tags: [
            "C#",
            ".NET 10",
            "WPF",
            "TCP Sockets",
            "JSON",
            "System.Text.Json",
            "Entity Framework Core",
            "SQLite",
            "xUnit",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Teams needed a lightweight, local network messenger without cloud dependencies or complicated setup.",
            solution:
                "Built a WPF client-server app with TCP socket communication, newline-delimited JSON messages, and real-time user presence.",
            goals:
                "Create a simple LAN chat with user management, message history, and network monitoring.",
            result:
                "A functional LAN messenger with broadcast, duplicate nickname rejection, and SQLite history.",
        },
        features: [
            "LAN Chat Server",
            "Multiple Clients",
            "Broadcast Messages",
            "User Presence",
            "Duplicate Nickname Rejection",
            "SQLite History",
            "Search Messages",
            "Network Monitor",
            "Ping Latency",
        ],
        architecture: [
            "WPF UI",
            "MVVM Pattern",
            "TCP Sockets",
            "JSON Protocol",
            "SQLite Database",
        ],
        techStack: [
            { label: "Language", items: ["C#"] },
            { label: "Framework", items: [".NET 10", "WPF", "Entity Framework Core"] },
            { label: "Protocol", items: ["TCP", "JSON", "Newline-delimited"] },
            { label: "Database", items: ["SQLite"] },
            { label: "Testing", items: ["xUnit"] },
        ],
        challenges: [
            {
                title: "Protocol Design",
                label: "Challenge",
                description: "Used newline-delimited JSON envelopes for messages.",
            },
            {
                title: "Concurrent Clients",
                label: "Solution",
                description: "Server handles multiple clients with async TCP.",
            },
            {
                title: "Broadcast Reliability",
                label: "Approach",
                description: "UserList and ChatMessage broadcasts to all clients.",
            },
            {
                title: "UI Responsiveness",
                label: "Implementation",
                description: "Async socket operations keep the UI responsive.",
            },
            {
                title: "Testing",
                label: "Result",
                description: "Integration tests for TCP server with multiple clients.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-05-01"
    },

    {
        title: "LaunchWorkspace",
        shortTitle: "LaunchWorkspace",
        slug: "launchworkspace",
        description:
            "A Windows WPF desktop workspace launcher built with C#, MVVM, Entity Framework Core, and SQLite. Helps developers start a project environment from one place: applications, folders, URLs, commands, environment variables, and launch history.",
        categories: ["C#", "WPF", "Desktop", "Open Source"],
        role: "Developer",
        duration: "2 Months",
        platform: "Windows Desktop Application",
        status: "Production Ready",
        tags: [
            "C#",
            ".NET 10",
            "WPF",
            "MVVM",
            "Entity Framework Core",
            "SQLite",
            "Keyboard Shortcuts",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Starting a development environment required opening multiple apps, folders, and URLs manually.",
            solution:
                "Built a workspace launcher that groups applications, folders, URLs, and commands into reusable workspaces.",
            goals:
                "Streamline project setup with one-click launches and persistent history.",
            result:
                "A productivity tool with sequential launches, progress tracking, and keyboard shortcuts.",
        },
        features: [
            "Workspace Management",
            "Application Library",
            "Launch Sequential",
            "Progress Tracking",
            "History Persistence",
            "Keyboard Shortcuts",
            "Dashboard Statistics",
            "Check Missing Items",
        ],
        architecture: [
            "WPF UI",
            "MVVM Pattern",
            "Entity Framework Core",
            "SQLite Database",
            "Process Launch",
        ],
        techStack: [
            { label: "Language", items: ["C#"] },
            { label: "Framework", items: [".NET 10", "WPF", "Entity Framework Core"] },
            { label: "Database", items: ["SQLite"] },
            { label: "Tools", items: ["Visual Studio", "dotnet"] },
        ],
        challenges: [
            {
                title: "Sequential Launch",
                label: "Challenge",
                description: "Launched items in order with delays between steps.",
            },
            {
                title: "Progress Tracking",
                label: "Solution",
                description: "Real-time logging and progress indicators.",
            },
            {
                title: "Error Detection",
                label: "Approach",
                description: "Check for missing folders and suspicious paths.",
            },
            {
                title: "Keyboard Shortcuts",
                label: "Implementation",
                description: "Ctrl+N, Ctrl+L, Ctrl+S, Delete for quick actions.",
            },
            {
                title: "Data Persistence",
                label: "Result",
                description: "SQLite stores workspaces, apps, and history.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-06-01",
        githubUrl: "https://github.com/hiadamwork/LaunchWorkspace",
    },

    {
        title: "LifeGrid",
        shortTitle: "LifeGrid",
        slug: "lifegrid",
        description:
            "A modular C++17 implementation of Conway's Game of Life. Provides a command-line simulator, built-in patterns, map loading and saving, statistics, wrap-around edges, cycle detection, image export, and automated tests.",
        categories: ["C++", "CLI", "Desktop", "Open Source"],
        role: "Developer",
        duration: "1.5 Months",
        platform: "Command-Line Application",
        status: "Production Ready",
        tags: [
            "C++17",
            "CMake",
            "Game of Life",
            "CLI",
            "Patterns",
            "PPM Export",
            "Statistics",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Classic Game of Life needed a clean, extensible C++ implementation with CLI controls and visualization.",
            solution:
                "Built a modular simulator with double-buffering, pattern loading, statistics tracking, and image export.",
            goals:
                "Create a fast, feature-rich Game of Life simulator with CLI interface.",
            result:
                "A complete simulator with built-in patterns, map import/export, and simulation statistics.",
        },
        features: [
            "Double-Buffered Simulation",
            "Built-in Patterns",
            "Load & Save Maps",
            "Random Grid Generation",
            "Statistics Tracking",
            "Cycle Detection",
            "PPM Image Export",
            "Wrap-Around Toggle",
            "Speed Control",
        ],
        architecture: [
            "C++ Core",
            "Double Buffer",
            "File I/O",
            "CLI Interface",
            "CMake Build",
        ],
        techStack: [
            { label: "Language", items: ["C++17"] },
            { label: "Build", items: ["CMake"] },
            { label: "Data", items: ["Text Files", "PPM"] },
            { label: "Testing", items: ["CTest"] },
        ],
        challenges: [
            {
                title: "Performance",
                label: "Challenge",
                description: "Efficient grid updates with double buffering.",
            },
            {
                title: "Pattern Parsing",
                label: "Solution",
                description: "Simple text format for maps and patterns.",
            },
            {
                title: "Cycle Detection",
                label: "Approach",
                description: "Track grid states to detect cycles and stability.",
            },
            {
                title: "Image Export",
                label: "Implementation",
                description: "PPM format without external dependencies.",
            },
            {
                title: "Testing",
                label: "Result",
                description: "Comprehensive test suite with CTest.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-02-15",
        githubUrl: "https://github.com/hiadamwork/LifeGrid"
    },

    {
        title: "Mini File Explorer",
        shortTitle: "Mini File Explorer",
        slug: "mini-file-explorer",
        description:
            "A portable C++17 command-line file manager. Provides a small shell-like interface for navigating directories, inspecting files, and running common filesystem operations without leaving the application.",
        categories: ["C++", "CLI", "Desktop", "Open Source"],
        role: "Developer",
        duration: "1.5 Months",
        platform: "Command-Line Application",
        status: "Production Ready",
        tags: [
            "C++17",
            "CMake",
            "File System",
            "CLI",
            "std::filesystem",
            "ANSI Colors",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Managing files from the command line required switching between multiple Unix commands.",
            solution:
                "Built a unified CLI file manager with shell-style commands, colored output, and persistent history.",
            goals:
                "Provide a complete file manager with navigation, copy, move, delete, tree, and search.",
            result:
                "A portable file explorer with command history, recursive operations, and clear error handling.",
        },
        features: [
            "Directory Navigation",
            "File Listing",
            "Create & Delete",
            "Copy & Move & Rename",
            "Recursive Tree",
            "Search Names",
            "Storage Statistics",
            "Command History",
            "ANSI Colors",
            "Delete Confirmation",
        ],
        architecture: [
            "C++ Core",
            "std::filesystem",
            "CLI Interface",
            "CMake Build",
        ],
        techStack: [
            { label: "Language", items: ["C++17"] },
            { label: "Build", items: ["CMake"] },
            { label: "Library", items: ["std::filesystem"] },
            { label: "Testing", items: ["CTest"] },
        ],
        challenges: [
            {
                title: "Cross-Platform",
                label: "Challenge",
                description: "std::filesystem ensures Windows and Linux compatibility.",
            },
            {
                title: "Path Handling",
                label: "Solution",
                description: "Quoted paths support spaces in names.",
            },
            {
                title: "Recursive Operations",
                label: "Approach",
                description: "Copy, move, and delete with recursive support.",
            },
            {
                title: "Safety",
                label: "Implementation",
                description: "Confirm before deleting non-empty directories.",
            },
            {
                title: "Testing",
                label: "Result",
                description: "Tests run in temporary directories, never touch user files.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-03-15",
        githubUrl: "https://github.com/hiadamwork/MiniFileExplorer"
    },

    {
        title: "Movie Explorer",
        shortTitle: "Movie Explorer",
        slug: "movie-explorer",
        description:
            "A responsive movie discovery application built with React and TypeScript. Uses the TMDB API to provide current movie data, artwork, trailers, cast information, recommendations, and actor filmographies.",
        categories: ["React", "Frontend", "TypeScript", "Open Source"],
        role: "Frontend Developer",
        duration: "3 Months",
        platform: "Web Application",
        status: "Production Ready",
        tags: [
            "React 19",
            "TypeScript",
            "Vite",
            "React Router",
            "Axios",
            "Framer Motion",
            "Lucide React",
            "React Hot Toast",
            "TMDB API",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Movie discovery required a clean, fast interface with rich data from TMDB.",
            solution:
                "Built a responsive React app with featured carousel, search, filters, and detailed movie pages.",
            goals:
                "Create a polished movie explorer with actor profiles, favorites, and dark/light themes.",
            result:
                "A production-ready movie app with lazy loading, accessibility, and reduced-motion support.",
        },
        features: [
            "Trending & Popular",
            "Featured Carousel",
            "Search & Filters",
            "Movie Details",
            "Cast & Director",
            "Official Trailer",
            "Actor Filmography",
            "Favorites (LocalStorage)",
            "Dark & Light Themes",
            "Responsive Design",
            "Accessibility",
        ],
        architecture: [
            "React UI",
            "React Router",
            "TMDB API Client",
            "Local Storage",
            "Vite Build",
        ],
        techStack: [
            { label: "Frontend", items: ["React 19", "TypeScript", "Vite"] },
            { label: "State", items: ["React Router", "Context"] },
            { label: "API", items: ["Axios", "TMDB API"] },
            { label: "UI", items: ["Framer Motion", "Lucide React", "React Hot Toast"] },
            { label: "Tools", items: ["ESLint", "Prettier"] },
        ],
        challenges: [
            {
                title: "API Integration",
                label: "Challenge",
                description: "Normalized TMDB responses with clean data mappers.",
            },
            {
                title: "Image Loading",
                label: "Solution",
                description: "Lazy loading with skeleton states.",
            },
            {
                title: "Routing",
                label: "Approach",
                description: "Nested routes with shared AppLayout and Outlet.",
            },
            {
                title: "Accessibility",
                label: "Implementation",
                description: "Keyboard controls and reduced-motion support.",
            },
            {
                title: "Performance",
                label: "Result",
                description: "Lazy-loaded pages and images for fast initial load.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-07-01",
        githubUrl: "https://github.com/hiadamwork/MovieExplorer",
        liveUrl: "https://heymovieexplorer.netlify.app/",
    },

    {
        title: "Music Search",
        shortTitle: "Music Search",
        slug: "music-search",
        description:
            "A modern, responsive music discovery application powered by the iTunes Search API. Search for songs, albums, and music videos, listen to 30-second previews, explore album tracklists, and save favorite tracks directly in the browser.",
        categories: ["React", "Frontend", "TypeScript", "Open Source"],
        role: "Frontend Developer",
        duration: "2.5 Months",
        platform: "Web Application",
        status: "Production Ready",
        tags: [
            "React 19",
            "TypeScript",
            "Vite",
            "React Router",
            "Axios",
            "React Icons",
            "React Hot Toast",
            "iTunes Search API",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Discovering music and previewing tracks required a simple, focused interface.",
            solution:
                "Built a React app with iTunes Search API, global audio player, and favorites.",
            goals:
                "Create a clean music discovery tool with previews, album views, and persistent favorites.",
            result:
                "A responsive music app with global player controls, paginated search, and dark/light themes.",
        },
        features: [
            "Search Songs & Albums",
            "Trending Searches",
            "Filters & Sorting",
            "Paginated Results",
            "Album Tracklists",
            "Global Audio Player",
            "30-Second Previews",
            "Favorites (LocalStorage)",
            "Dark & Light Themes",
            "Keyboard Shortcut (/)",
            "Responsive Design",
        ],
        architecture: [
            "React UI",
            "React Router",
            "iTunes API Client",
            "Audio Player Context",
            "Local Storage",
            "Vite Build",
        ],
        techStack: [
            { label: "Frontend", items: ["React 19", "TypeScript", "Vite"] },
            { label: "State", items: ["React Router", "Context API"] },
            { label: "API", items: ["Axios", "iTunes Search API"] },
            { label: "UI", items: ["React Icons", "React Hot Toast"] },
            { label: "Tools", items: ["ESLint", "Prettier"] },
        ],
        challenges: [
            {
                title: "Audio Player",
                label: "Challenge",
                description: "Global audio player with seek, volume, and track switching.",
            },
            {
                title: "URL State",
                label: "Solution",
                description: "Search state persisted in URL for sharing.",
            },
            {
                title: "Album View",
                label: "Approach",
                description: "Detailed album pages with full tracklists.",
            },
            {
                title: "Performance",
                label: "Implementation",
                description: "Lazy loading with paginated results.",
            },
            {
                title: "UI Responsiveness",
                label: "Result",
                description: "Mobile-first layouts with touch-friendly controls.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-08-01",
        githubUrl: "https://github.com/hiadamwork/MusicSearch",
        liveUrl: "https://heymusicsearch.netlify.app/",
    },

    {
        title: "NoteFlow",
        shortTitle: "NoteFlow",
        slug: "noteflow",
        description:
            "A responsive notes workspace built with React, TypeScript, Express, Prisma, and PostgreSQL. User accounts, sessions, notes, categories, tags, trash, and settings are persisted in PostgreSQL.",
        categories: ["React", "Backend", "Frontend", "Open Source"],
        role: "Full Stack Developer",
        duration: "3 Months",
        platform: "Web Application",
        status: "Production Ready",
        tags: [
            "React 19",
            "TypeScript",
            "Vite",
            "React Router",
            "Express",
            "Prisma",
            "PostgreSQL",
            "Tiptap",
            "Vitest",
            "ESLint",
            "Prettier",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Users needed a clean, rich-text notes workspace with accounts, categories, tags, and trash management.",
            solution:
                "Built a full-stack notes app with React frontend, Express API, Prisma ORM, and PostgreSQL.",
            goals:
                "Provide a complete notes workspace with authentication, rich-text editing, and data persistence.",
            result:
                "A polished notes app with HTTP-only sessions, Tiptap editor, and responsive design.",
        },
        features: [
            "User Registration & Login",
            "HTTP-Only Sessions",
            "Rich-Text Notes (Tiptap)",
            "Categories & Tags",
            "Pinning & Search",
            "Trash & Restore",
            "Dark & Light Themes",
            "Accent Colors",
            "Autosave",
            "Responsive Design",
        ],
        architecture: [
            "React UI",
            "Express API",
            "Prisma ORM",
            "PostgreSQL",
            "Vite Build",
        ],
        techStack: [
            { label: "Frontend", items: ["React 19", "TypeScript", "Vite", "React Router"] },
            { label: "Backend", items: ["Express", "Prisma", "PostgreSQL"] },
            { label: "Editor", items: ["Tiptap"] },
            { label: "Testing", items: ["Vitest", "Testing Library"] },
            { label: "Tools", items: ["ESLint", "Prettier"] },
        ],
        challenges: [
            {
                title: "Authentication",
                label: "Challenge",
                description: "HTTP-only cookies with server-side sessions.",
            },
            {
                title: "Rich Text",
                label: "Solution",
                description: "Tiptap editor with customizable toolbar.",
            },
            {
                title: "Data Relationships",
                label: "Approach",
                description: "Prisma managed note-category-tag relationships.",
            },
            {
                title: "Trash Management",
                label: "Implementation",
                description: "Soft delete with restore and permanent delete.",
            },
            {
                title: "Testing",
                label: "Result",
                description: "Unit and component tests with Vitest.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-09-01",
        githubUrl: "https://github.com/hiadamwork/NoteFlow",
        liveUrl: "https://heynoteflow.netlify.app/",
    },

    {
        title: "PasswordVault",
        shortTitle: "PasswordVault",
        slug: "passwordvault",
        description:
            "A local command-line password manager written in modern C++ for Windows. Stores credentials in one authenticated encrypted vault protected by a master password.",
        categories: ["C++", "CLI", "Desktop", "Open Source"],
        role: "Developer",
        duration: "2 Months",
        platform: "Command-Line Application",
        status: "Production Ready",
        tags: [
            "C++20",
            "CMake",
            "AES-GCM",
            "Encryption",
            "Password Manager",
            "CLI",
            "Security",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Users needed a local, encrypted password manager without cloud dependencies.",
            solution:
                "Built a C++ CLI tool with AES-GCM encryption, master password protection, and vault backup.",
            goals:
                "Create a secure, offline password manager with strong encryption and password generation.",
            result:
                "A secure vault with encrypted storage, password generation, strength analysis, and backup/restore.",
        },
        features: [
            "Master Password",
            "Encrypted Vault (AES-GCM)",
            "CRUD Credentials",
            "Password Generator",
            "Strength Analysis",
            "Vault Statistics",
            "Backup & Restore",
            "Change Master Password",
            "Tamper Detection",
        ],
        architecture: [
            "C++ Core",
            "AES-GCM Encryption",
            "Binary Vault Format",
            "CLI Interface",
            "CMake Build",
        ],
        techStack: [
            { label: "Language", items: ["C++20"] },
            { label: "Build", items: ["CMake", "Visual Studio"] },
            { label: "Security", items: ["AES-GCM", "Cryptography"] },
            { label: "Testing", items: ["Custom Tests"] },
        ],
        challenges: [
            {
                title: "Encryption",
                label: "Challenge",
                description: "Implemented AES-GCM with salt, nonce, and authentication.",
            },
            {
                title: "Master Password",
                label: "Solution",
                description: "At least 12 characters with hidden input.",
            },
            {
                title: "Tamper Detection",
                label: "Approach",
                description: "Magic bytes, version, and authentication tag.",
            },
            {
                title: "Password Generation",
                label: "Implementation",
                description: "Cryptographically random passwords.",
            },
            {
                title: "Testing",
                label: "Result",
                description: "Tests cover encryption, tamper rejection, and CRUD.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-04-15",
        githubUrl: "https://github.com/hiadamwork/PasswordVault",
    },

    {
        title: "PixelForge",
        shortTitle: "PixelForge",
        slug: "pixelforge",
        description:
            "A Windows WPF desktop image processing studio built with C# and .NET. Designed as a portfolio-grade application for converting, resizing, compressing, watermarking, and batch processing images through a clean MVVM architecture.",
        categories: ["C#", "WPF", "Desktop", "Open Source"],
        role: "Developer",
        duration: "3 Months",
        platform: "Windows Desktop Application",
        status: "Production Ready",
        tags: [
            "C#",
            ".NET 10",
            "WPF",
            "MVVM",
            "Entity Framework Core",
            "SQLite",
            "Image Processing",
            "xUnit",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Image processing required a professional, batch-capable tool with preview and presets.",
            solution:
                "Built a WPF image studio with live preview, batch processing, presets, and SQLite persistence.",
            goals:
                "Create a complete image processing suite with conversion, watermarking, and batch operations.",
            result:
                "A polished image studio with dashboard, history, presets, and statistics.",
        },
        features: [
            "Single Image Convert",
            "Live Preview",
            "Batch Processing",
            "Resize & Rotate & Flip",
            "Grayscale & Adjust",
            "JPEG Quality",
            "Text Watermark",
            "Preset Management",
            "History & Statistics",
            "Multiple Formats",
        ],
        architecture: [
            "WPF UI",
            "MVVM Pattern",
            "Entity Framework Core",
            "SQLite Database",
            "Image Processing Library",
        ],
        techStack: [
            { label: "Language", items: ["C#"] },
            { label: "Framework", items: [".NET 10", "WPF", "Entity Framework Core"] },
            { label: "Database", items: ["SQLite"] },
            { label: "Testing", items: ["xUnit"] },
        ],
        challenges: [
            {
                title: "Image Processing",
                label: "Challenge",
                description: "Supported multiple formats with quality adjustments.",
            },
            {
                title: "Live Preview",
                label: "Solution",
                description: "Real-time preview with visual feedback.",
            },
            {
                title: "Batch Processing",
                label: "Approach",
                description: "Process multiple images with progress tracking.",
            },
            {
                title: "Presets",
                label: "Implementation",
                description: "Save and reuse common workflows.",
            },
            {
                title: "Data Persistence",
                label: "Result",
                description: "SQLite stores jobs, presets, and preferences.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-05-15",
        githubUrl: "https://github.com/hiadamwork/PixelForge",
    },

    {
        title: "Project Archive",
        shortTitle: "Project Archive",
        slug: "project-archive",
        description:
            "A Windows WPF desktop application for developers who want one local place to track software projects. Stores project metadata, technologies, tags, notes, links, progress, ratings, favorites, estimated hours, actual hours, and archive state in SQLite.",
        categories: ["C#", "WPF", "Desktop", "Open Source"],
        role: "Developer",
        duration: "2 Months",
        platform: "Windows Desktop Application",
        status: "Production Ready",
        tags: [
            "C#",
            ".NET 10",
            "WPF",
            "MVVM",
            "Entity Framework Core",
            "SQLite",
            "CommunityToolkit.Mvvm",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Developers needed a local tool to track project metadata, progress, and ratings.",
            solution:
                "Built a WPF app with SQLite persistence, search, filters, and export capabilities.",
            goals:
                "Create a complete project archive with statistics, favorites, and export.",
            result:
                "A dark-themed dashboard with project tracking, search, filters, and JSON/CSV export.",
        },
        features: [
            "CRUD Projects",
            "Search & Filter",
            "Favorites & Archive",
            "Dashboard Statistics",
            "JSON Export",
            "CSV Export",
            "Sample Data Seed",
            "Smoke Tests",
            "Dark Theme",
        ],
        architecture: [
            "WPF UI",
            "MVVM Pattern",
            "Entity Framework Core",
            "SQLite Database",
        ],
        techStack: [
            { label: "Language", items: ["C#"] },
            { label: "Framework", items: [".NET 10", "WPF", "Entity Framework Core"] },
            { label: "Database", items: ["SQLite"] },
            { label: "Tools", items: ["Visual Studio", "dotnet"] },
        ],
        challenges: [
            {
                title: "Data Modeling",
                label: "Challenge",
                description: "Project metadata with technologies, tags, and notes.",
            },
            {
                title: "Search & Filter",
                label: "Solution",
                description: "Multi-field search with status, difficulty, and category filters.",
            },
            {
                title: "Statistics",
                label: "Approach",
                description: "Dashboard shows totals, completed, in-progress, archived.",
            },
            {
                title: "Export",
                label: "Implementation",
                description: "JSON and CSV export with timestamps.",
            },
            {
                title: "Testing",
                label: "Result",
                description: "Smoke tests cover validation, persistence, and export.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-06-15",
        githubUrl: "https://github.com/hiadamwork/ProjectArchive",
    },

    {
        title: "QR Studio",
        shortTitle: "QR Studio",
        slug: "qr-studio",
        description:
            "A Windows WPF desktop application for creating, managing, previewing, and exporting QR codes. Built as a portfolio-grade C# project with MVVM structure, local SQLite persistence, validation, reusable templates, search, filtering, statistics, and PNG export.",
        categories: ["C#", "WPF", "Desktop", "Open Source"],
        role: "Developer",
        duration: "2.5 Months",
        platform: "Windows Desktop Application",
        status: "Production Ready",
        tags: [
            "C#",
            ".NET 10",
            "WPF",
            "MVVM",
            "Entity Framework Core",
            "SQLite",
            "QR Code",
            "PNG Export",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Creating and managing QR codes required a dedicated desktop tool with templates and persistence.",
            solution:
                "Built a WPF QR studio with multiple QR types, live preview, templates, and SQLite storage.",
            goals:
                "Provide a complete QR code management tool with export, favorites, and statistics.",
            result:
                "A polished QR studio with URL, text, email, phone, SMS, Wi-Fi, contact, location, and calendar support.",
        },
        features: [
            "Multiple QR Types",
            "Live Preview",
            "Visual Templates",
            "Save & Browse",
            "Search & Filter",
            "Favorites",
            "PNG Export",
            "Clipboard Copy",
            "Dashboard Statistics",
            "Keyboard Shortcuts",
        ],
        architecture: [
            "WPF UI",
            "MVVM Pattern",
            "Entity Framework Core",
            "SQLite Database",
            "QR Code Library",
        ],
        techStack: [
            { label: "Language", items: ["C#"] },
            { label: "Framework", items: [".NET 10", "WPF", "Entity Framework Core"] },
            { label: "Database", items: ["SQLite"] },
            { label: "Tools", items: ["Visual Studio", "dotnet"] },
        ],
        challenges: [
            {
                title: "QR Generation",
                label: "Challenge",
                description: "Support multiple types with custom content fields.",
            },
            {
                title: "Live Preview",
                label: "Solution",
                description: "Real-time QR rendering while editing.",
            },
            {
                title: "Templates",
                label: "Approach",
                description: "Reusable visual templates for QR codes.",
            },
            {
                title: "Export",
                label: "Implementation",
                description: "PNG export with clipboard copy support.",
            },
            {
                title: "Data Persistence",
                label: "Result",
                description: "SQLite stores QR codes with search and filters.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-07-15",
        githubUrl: "https://github.com/hiadamwork/QRStudio",
    },

    {
        title: "SkyCast",
        shortTitle: "SkyCast",
        slug: "skycast",
        description:
            "A modern React weather dashboard built with Vite. Uses OpenWeather APIs for live weather, city search, hourly forecasts, multi-day forecast cards, and air quality data.",
        categories: ["React", "Frontend", "TypeScript", "Open Source"],
        role: "Frontend Developer",
        duration: "2 Months",
        platform: "Web Application",
        status: "Production Ready",
        tags: [
            "React 19",
            "TypeScript",
            "Vite",
            "OpenWeather API",
            "Lucide React",
            "Node.js Test Runner",
            "ESLint",
            "Prettier",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Weather information needed a clean, responsive dashboard with forecasts and air quality.",
            solution:
                "Built a React weather app with OpenWeather APIs, city search, favorites, and multi-language support.",
            goals:
                "Create a complete weather dashboard with current conditions, hourly forecasts, and city map.",
            result:
                "A responsive weather app with favorites, recent searches, unit toggle, and dark/light themes.",
        },
        features: [
            "Current Weather",
            "City Search with Autocomplete",
            "24-Hour Forecast",
            "Multi-Day Forecast",
            "Weather Highlights",
            "Air Quality Index",
            "Sunrise & Sunset",
            "Favorites (LocalStorage)",
            "Recent Searches",
            "Celsius/Fahrenheit",
            "Light & Dark Themes",
            "Language Switcher",
            "Embedded Map",
        ],
        architecture: [
            "React UI",
            "OpenWeather API",
            "Local Storage",
            "Vite Build",
            "Node.js Testing",
        ],
        techStack: [
            { label: "Frontend", items: ["React 19", "TypeScript", "Vite"] },
            { label: "API", items: ["OpenWeather API"] },
            { label: "UI", items: ["Lucide React"] },
            { label: "Testing", items: ["Node.js Test Runner"] },
            { label: "Tools", items: ["ESLint", "Prettier"] },
        ],
        challenges: [
            {
                title: "API Integration",
                label: "Challenge",
                description: "Multiple OpenWeather APIs with response normalization.",
            },
            {
                title: "City Search",
                label: "Solution",
                description: "Geocoding API with autocomplete.",
            },
            {
                title: "Multi-Language",
                label: "Approach",
                description: "English, Slovak, Czech, and German support.",
            },
            {
                title: "Favorites",
                label: "Implementation",
                description: "LocalStorage with recent searches.",
            },
            {
                title: "Testing",
                label: "Result",
                description: "Node.js test runner for automated tests.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-08-15",
        githubUrl: "https://github.com/hiadamwork/SkyCast",
        liveUrl: "https://heyskycast.netlify.app/",
    },

    {
        title: "StockFlow",
        shortTitle: "StockFlow",
        slug: "stockflow",
        description:
            "A dependency-free C++17 command-line inventory manager. Keeps products, categories, stock movements, reports, imports, exports, backups, and audit logs in a clean local workflow.",
        categories: ["C++", "CLI", "Desktop", "Open Source"],
        role: "Developer",
        duration: "2 Months",
        platform: "Command-Line Application",
        status: "Production Ready",
        tags: [
            "C++17",
            "CMake",
            "CLI",
            "Inventory",
            "CSV Export",
            "Backup",
            "Audit Log",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Inventory management required a lightweight, dependency-free CLI tool.",
            solution:
                "Built a C++ inventory manager with products, categories, stock movements, and reporting.",
            goals:
                "Create a complete inventory system with search, filters, transactions, and backups.",
            result:
                "A professional inventory manager with categories, stock history, reports, and CSV import/export.",
        },
        features: [
            "Product Management",
            "Stock Movements",
            "Category Management",
            "Search & Filter",
            "Inventory Statistics",
            "Low-Stock Warnings",
            "Report Generation",
            "CSV Export",
            "CSV Import",
            "Backup & Atomic Save",
            "Transaction History",
            "Audit Log",
        ],
        architecture: [
            "C++ Core",
            "File I/O",
            "CLI Interface",
            "CMake Build",
        ],
        techStack: [
            { label: "Language", items: ["C++17"] },
            { label: "Build", items: ["CMake"] },
            { label: "Data", items: ["Text Files", "CSV"] },
            { label: "Testing", items: ["CTest"] },
        ],
        challenges: [
            {
                title: "Data Integrity",
                label: "Challenge",
                description: "Atomic file replacement for safe writes.",
            },
            {
                title: "Category Management",
                label: "Solution",
                description: "Safe rename and remove unused categories.",
            },
            {
                title: "Stock Movements",
                label: "Approach",
                description: "Receive and issue with transaction history.",
            },
            {
                title: "CSV Import/Export",
                label: "Implementation",
                description: "Full product import and export to CSV.",
            },
            {
                title: "Testing",
                label: "Result",
                description: "Tests for business rules and persistence.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-09-15",
        githubUrl: "https://github.com/hiadamwork/StockFlow",
    },

    {
        title: "World Explorer",
        shortTitle: "World Explorer",
        slug: "world-explorer",
        description:
            "A React portfolio application for discovering, filtering, comparing, and saving countries.",
        categories: ["React", "Frontend", "TypeScript", "Open Source"],
        role: "Frontend Developer",
        duration: "1.5 Months",
        platform: "Web Application",
        status: "Production Ready",
        tags: [
            "React 19",
            "TypeScript",
            "Vite",
            "REST Countries API",
            "ESLint",
            "Prettier",
            "GitHub Actions",
        ],
        variant: "analytics",
        overview: {
            problem:
                "Exploring and comparing countries required a clean, fast interface with cached data.",
            solution:
                "Built a React app with country data caching, filtering, and comparison.",
            goals:
                "Create a responsive country explorer with data sync and GitHub Actions automation.",
            result:
                "A polished country explorer with local cache, filtering, and automated weekly updates.",
        },
        features: [
            "Country Discovery",
            "Search & Filter",
            "Country Comparison",
            "Favorites (LocalStorage)",
            "Responsive Design",
            "Data Cache",
            "Automated Sync",
            "GitHub Actions",
        ],
        architecture: [
            "React UI",
            "Local Data Cache",
            "REST Countries API",
            "Vite Build",
            "GitHub Actions",
        ],
        techStack: [
            { label: "Frontend", items: ["React 19", "TypeScript", "Vite"] },
            { label: "API", items: ["REST Countries API"] },
            { label: "Tools", items: ["ESLint", "Prettier", "GitHub Actions"] },
        ],
        challenges: [
            {
                title: "Data Caching",
                label: "Challenge",
                description: "Cache country data with 7-day expiry.",
            },
            {
                title: "Sync Automation",
                label: "Solution",
                description: "GitHub Actions weekly cache refresh.",
            },
            {
                title: "API Fallback",
                label: "Approach",
                description: "Fallback to REST Countries source if API fails.",
            },
            {
                title: "File Integrity",
                label: "Implementation",
                description: "Temporary file write to prevent corruption.",
            },
            {
                title: "Quality",
                label: "Result",
                description: "ESLint and build checks in CI.",
            },
        ],
        performance: basePerformance,
        timeline: baseTimeline,
        date: "2025-10-01",
        githubUrl: "https://github.com/hiadamwork/WorldExplorer",
        liveUrl: "https://heyworldexplorer.netlify.app/",
    },
];


export const newProject = projects[0];

export const getProjectBySlug = (slug) =>
    projects.find((project) => project.slug === slug);

export const getRelatedProjects = (activeProject) =>
    projects
        .filter((project) => project.slug !== activeProject.slug)
        .slice(0, 3);
