import { Avatar, Button, Card, DynamicIcon, Text } from "@/components";

import styles from "./ContactInfo.module.css";

export function ContactInfo({
    availability,
    methods,
    recentMessages,
    socialLinks,
}) {
    return (
        <>
            <Card
                as="aside"
                className={styles.contactCard}
                padding="none"
                radius="xl"
            >
                {methods.map((method) => (
                    <div className={styles.contactMethod} key={method.title}>
                        <span className={styles.methodIcon}>
                            <DynamicIcon name={method.icon} />
                        </span>
                        <div>
                            <strong>{method.title}</strong>
                            <Text size="xs">{method.detail}</Text>
                        </div>
                    </div>
                ))}
                <div className={styles.socials}>
                    {socialLinks.map((link) => (
                        <a
                            className={styles.socialLink}
                            href={link.href}
                            key={link.label}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <DynamicIcon name={link.icon} />
                            {link.label}
                        </a>
                    ))}
                </div>
            </Card>

            <div className={styles.statusRow}>
                <Card
                    className={styles.availabilityCard}
                    padding="none"
                >
                    <span className={styles.availabilityLabel}>
                        {availability.headline}
                    </span>
                    <span className={styles.availabilityStatus}>
                        {availability.status}
                    </span>
                    <Text size="xs">{availability.note}</Text>
                </Card>

                <Card className={styles.messagesCard} padding="none">
                    <span className={styles.messagesIcon}>
                        <DynamicIcon name="mail" />
                    </span>
                    <div className={styles.messagesAvatars}>
                        {recentMessages.participants.map((person) => (
                            <Avatar
                                initials={person.initials}
                                key={person.initials}
                                size="sm"
                                tone={person.tone}
                            />
                        ))}
                    </div>
                    <Text size="xs">{recentMessages.summary}</Text>
                    <Button size="sm" variant="secondary">
                        View Messages
                    </Button>
                </Card>
            </div>
        </>
    );
}
