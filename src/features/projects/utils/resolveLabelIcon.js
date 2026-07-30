const KEYWORD_ICON_RULES = [
    { keywords: ['planning'], icon: 'target' },
    { keywords: ['ui design'], icon: 'palette' },
    { keywords: ['testing'], icon: 'checkCircle' },
    { keywords: ['maintenance'], icon: 'shieldCheck' },
    { keywords: ['auth', 'jwt'], icon: 'shieldCheck' },
    { keywords: ['admin'], icon: 'settings' },
    { keywords: ['dashboard'], icon: 'layoutDashboard' },
    { keywords: ['analytic', 'chart', 'data table', 'report'], icon: 'gauge' },
    { keywords: ['respons', 'desktop ui'], icon: 'smartphone' },
    { keywords: ['notif'], icon: 'bell' },
    { keywords: ['dark mode'], icon: 'moon' },
    { keywords: ['checkout', 'cart'], icon: 'shoppingCart' },
    { keywords: ['payment'], icon: 'creditCard' },
    { keywords: ['order', 'inventory', 'product'], icon: 'database' },
    { keywords: ['sql', 'postgres', 'database', 'static data'], icon: 'database' },
    { keywords: ['card', 'board', 'badge', 'button', 'tokens', 'design token'], icon: 'layout' },
    { keywords: ['validation', 'error handling'], icon: 'checkCircle' },
    { keywords: ['filter', 'export'], icon: 'search' },
    { keywords: ['local storage', 'local files', 'docs'], icon: 'bookOpen' },
    { keywords: ['team', 'activity', 'portfolio view'], icon: 'users' },
    { keywords: ['cloud', 'hosting', 'deployment'], icon: 'globe' },
    { keywords: ['client', 'react', 'component', 'ui primitive'], icon: 'layout' },
    { keywords: ['node', 'express', 'java', 'spring', 'service layer', 'state layer'], icon: 'server' },
    { keywords: ['rest', 'api'], icon: 'server' },
    { keywords: ['css'], icon: 'code' },
]

const DEFAULT_ICON = 'sparkles'

export function resolveLabelIcon(label = '') {
    const normalized = label.toLowerCase()
    const rule = KEYWORD_ICON_RULES.find((entry) =>
        entry.keywords.some((keyword) => normalized.includes(keyword)),
    )

    return rule ? rule.icon : DEFAULT_ICON
}
