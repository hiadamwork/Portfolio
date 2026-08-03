export const projectTypes = [
    { label: 'Landing Page', icon: 'layout' },
    { label: 'Business Website', icon: 'building' },
    { label: 'Web Application', icon: 'globe' },
    { label: 'Dashboard', icon: 'layoutDashboard' },
    { label: 'Backend API', icon: 'server' },
    { label: 'Desktop Application', icon: 'monitor' },
    { label: 'Other', icon: 'moreHorizontal' },
]

export const projectBudgets = [
    { label: 'Starter', icon: 'coins' },
    { label: 'Growing Business', icon: 'trendingUp' },
    { label: 'Professional', icon: 'award' },
    { label: 'Enterprise', icon: 'building2' },
]

export const contactMethods = [
    { title: 'Email', detail: 'Response within 24 hours', icon: 'mail' },
    { title: 'Location', detail: 'Remote Worldwide', icon: 'mapPin' },
    { title: 'Availability', detail: 'Open for Freelance', icon: 'clock' },
    { title: 'Languages', detail: 'English, Slovak', icon: 'globe' },
    { title: 'Working Hours', detail: 'Monday - Friday', icon: 'calendar' },
]

export const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/hiadamwork', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/adamdlugos', icon: 'linkedin' },
    { label: 'Fiverr', href: 'https://fiverr.com', icon: 'externalLink' },
    { label: 'Upwork', href: 'https://upwork.com', icon: 'externalLink' },
    { label: 'Contra', href: 'https://contra.com', icon: 'externalLink' },
]

export const processSteps = [
    'Review Request',
    'Project Discussion',
    'Planning',
    'Development',
    'Launch',
]

export const contactReasons = [
    { label: 'Fast Communication', icon: 'zap' },
    { label: 'Clean Architecture', icon: 'code' },
    { label: 'Modern UI', icon: 'palette' },
    { label: 'Reliable Delivery', icon: 'shieldCheck' },
]

export const expectations = [
    'Clear communication',
    'Project expectations',
    'Weekly progress updates',
    'Clean and maintainable code',
    'Reliable delivery',
]

export const faqs = [
    {
        question: 'How quickly do you reply?',
        answer: 'I respond to every inquiry within 24 hours on business days, often much sooner.',
    },
    {
        question: 'Do you work internationally?',
        answer: "Yes. I work remotely with clients worldwide across a wide range of time zones.",
    },
    {
        question: 'Can you work with existing projects?',
        answer: 'Absolutely. I regularly join ongoing codebases to extend, refactor or stabilize them.',
    },
    {
        question: 'Do you sign NDAs?',
        answer: "Of course. I'm happy to sign an NDA before discussing any confidential project details.",
    },
]

export const availability = {
    headline: 'Current Availability',
    status: 'Within 1-2 weeks',
    note: 'Currently booking new projects starting next month.',
}

export const recentMessages = {
    title: 'Recent Inquiries',
    participants: [
        { initials: 'AK', tone: 'blue' },
        { initials: 'MP', tone: 'purple' },
        { initials: 'JT', tone: 'yellow' },
    ],
    summary: '3 new messages from potential clients this week.',
}

export const contactPageContent = {
    hero: {
        title: "Let's Build Something Great",
        lead: "Have an idea, startup or business project? I'd love to hear about it.",
        description:
            "Whether you need a landing page, business website, dashboard, SaaS platform or custom web application, let's discuss how we can turn your ideas into reality.",
        primaryAction: {
            label: 'Schedule a Call',
            href: '#contact-form',
        },
        secondaryAction: {
            label: 'View Portfolio',
            href: '/projects',
        },
        availability: 'Currently Accepting New Projects',
    },
    form: {
        submit: 'Send Message',
        sending: 'Sending...',
        success:
            'Message prepared successfully. Backend delivery can be connected next.',
    },
    sections: {
        projectType: 'Project Type',
        projectBudget: 'Project Budget',
        process: 'Process Preview',
        whyContact: 'Why Contact Me',
        faq: 'FAQ',
        expectations: 'Client Expectations',
    },
    quote: 'Great software starts with a great conversation.',
    cta: {
        title: "Let's Create Something Exceptional",
        subtitle:
            "I'm always excited to collaborate on ambitious ideas and modern software products.",
        primaryLabel: 'Start Your Project',
        secondaryLabel: 'View My Work',
        secondaryHref: '/projects',
    },
}
