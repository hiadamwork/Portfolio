import { CopyButton } from '@/components/ui/CopyButton'
import { cx } from '@/utils/cx'

import styles from './CodeBlock.module.css'

export function CodeBlock({ children, className, code, language = 'text' }) {
    const value = code ?? children

    return (
        <figure className={cx(styles.codeBlock, className)}>
            <figcaption>
                <span>{language}</span>
                <CopyButton text={String(value)} />
            </figcaption>
            <pre>
                <code>{value}</code>
            </pre>
        </figure>
    )
}
