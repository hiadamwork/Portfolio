import { Clock } from 'lucide-react'

import { Badge } from '@/components'
import { formatBlogDate } from '@/features/blog/utils/formatBlogDate'

export function ArticleMeta({ article, badge, className }) {
    return (
        <div className={className}>
            {badge ? <Badge tone={badge.tone}>{badge.label}</Badge> : null}
            <span>
                <Clock aria-hidden="true" />
                {article.readTime}
            </span>
            <span>{formatBlogDate(article.date)}</span>
        </div>
    )
}
