import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/Button'

export function CopyButton({ label = 'Copy', text }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 1200)
    }

    return (
        <Button
            aria-label={copied ? 'Copied' : label}
            onClick={handleCopy}
            size="sm"
            type="button"
            variant="secondary"
        >
            {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            {copied ? 'Copied' : label}
        </Button>
    )
}
