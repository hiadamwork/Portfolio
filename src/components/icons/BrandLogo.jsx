export function BrandLogo() {
    return (
        <svg aria-hidden="true" viewBox="0 0 32 32" role="img">
            <defs>
                <linearGradient id="brandLogoGradient" x1="7" x2="25" y1="25" y2="6">
                    <stop stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#93c5fd" />
                </linearGradient>
            </defs>
            <path
                d="M16 4.5a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Z"
                fill="url(#brandLogoGradient)"
            />
            <path
                d="M8.2 25.5c.9-5.2 3.7-8.6 7.8-8.6s6.9 3.4 7.8 8.6H8.2Z"
                fill="url(#brandLogoGradient)"
                opacity=".86"
            />
            <path
                d="M6.5 25.5h19"
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeOpacity=".72"
                strokeWidth="1.8"
            />
        </svg>
    )
}
