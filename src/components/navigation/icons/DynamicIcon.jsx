import { DYNAMIC_ICON_MAP } from './dynamicIconMap'


export function DynamicIcon({ name, ...props }) {
    const Icon = DYNAMIC_ICON_MAP[name]

    if (!Icon) return null

    return <Icon aria-hidden="true" strokeWidth={1.6} {...props} />
}
