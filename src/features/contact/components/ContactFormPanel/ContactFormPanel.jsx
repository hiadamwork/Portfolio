import { useRef } from 'react'

import { Button, Card, Checkbox, Input, Select, Textarea } from '@/components'
import { useContactForm } from '@/features/contact/hooks'

import styles from './ContactFormPanel.module.css'

export function ContactFormPanel({ budgets, content, projectTypes }) {
    const fileInputRef = useRef(null)
    const {
        attachmentName,
        clearAttachment,
        errors,
        handleChange,
        handleSubmit,
        status,
        values,
    } = useContactForm()

    const handleClearAttachment = () => {
        clearAttachment()

        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    return (
        <Card
            as="section"
            className={styles.formPanel}
            id="contact-form"
            padding="none"
            radius="xl"
        >
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formGrid}>
                    <label>
                        Full Name
                        <Input
                            invalid={Boolean(errors.name)}
                            name="name"
                            onChange={handleChange}
                            placeholder="Full Name"
                            value={values.name}
                        />
                        {errors.name ? <span>{errors.name}</span> : null}
                    </label>

                    <label>
                        Company
                        <Input
                            name="company"
                            onChange={handleChange}
                            placeholder="Company"
                            value={values.company}
                        />
                    </label>
                </div>

                <label>
                    Email Address
                    <Input
                        invalid={Boolean(errors.email)}
                        name="email"
                        onChange={handleChange}
                        placeholder="Email Address"
                        type="email"
                        value={values.email}
                    />
                    {errors.email ? <span>{errors.email}</span> : null}
                </label>

                <div className={styles.formGrid}>
                    <label>
                        Project Type
                        <Select
                            invalid={Boolean(errors.projectType)}
                            name="projectType"
                            onChange={handleChange}
                            options={projectTypes.map((type) => ({
                                label: type.label,
                                value: type.label,
                            }))}
                            placeholder="Project Type"
                            value={values.projectType}
                        />
                        {errors.projectType ? (
                            <span>{errors.projectType}</span>
                        ) : null}
                    </label>

                    <label>
                        Estimated Budget
                        <Select
                            name="budget"
                            onChange={handleChange}
                            options={budgets.map((budget) => ({
                                label: budget.label,
                                value: budget.label,
                            }))}
                            placeholder="Budget"
                            value={values.budget}
                        />
                    </label>
                </div>

                <label>
                    Timeline
                    <Textarea
                        invalid={Boolean(errors.message)}
                        name="message"
                        onChange={handleChange}
                        placeholder="Project Description"
                        rows="5"
                        value={values.message}
                    />
                    {errors.message ? <span>{errors.message}</span> : null}
                </label>

                <label className={styles.fileLabel}>
                    File Attachment
                    <div className={styles.fileInputWrapper}>
                        <input
                            className={styles.fileInput}
                            id="attachment"
                            name="attachment"
                            onChange={handleChange}
                            ref={fileInputRef}
                            type="file"
                        />
                        <div className={styles.fileName} aria-hidden>
                            {attachmentName || 'File Attachment'}
                        </div>
                        <Button
                            aria-label="Clear file"
                            className={styles.clearFile}
                            onClick={handleClearAttachment}
                            size="xs"
                            type="button"
                            variant="ghost"
                        >
                            x
                        </Button>
                    </div>
                </label>

                <Checkbox
                    checked={values.consent}
                    className={styles.checkbox}
                    name="consent"
                    onChange={handleChange}
                >
                    I agree to the{' '}
                    <a href="/privacy" className={styles.privacyLink}>
                        Privacy Policy
                    </a>
                </Checkbox>
                {errors.consent ? (
                    <p className={styles.formError}>{errors.consent}</p>
                ) : null}

                <Button
                    className={styles.submitButton}
                    disabled={status === 'sending'}
                    type="submit"
                    variant="primary"
                >
                    {status === 'sending' ? content.sending : content.submit}
                </Button>

                {status === 'success' ? (
                    <p className={styles.formSuccess}>{content.success}</p>
                ) : null}
            </form>
        </Card>
    )
}
