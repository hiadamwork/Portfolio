import { useState } from "react";

import { Badge, Button, Container } from "@/components/ui";
import { ProjectCta } from "@/features/projects/components/ProjectCta";
import {
    contactMethods,
    contactReasons,
    expectations,
    faqs,
    processSteps,
    projectBudgets,
    projectTypes,
    socialLinks,
} from "@/features/contact/data/contact";

import styles from "./ContactPage.module.css";

const initialForm = {
    name: "",
    company: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    consent: false,
    attachment: null,
};

function validateForm(values) {
    const errors = {};

    if (values.name.trim().length < 2) {
        errors.name = "Please enter your full name.";
    }

    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "Please enter a valid email address.";
    }

    if (!values.projectType) {
        errors.projectType = "Choose a project type.";
    }

    if (values.message.trim().length < 10) {
        errors.message = "Tell me a little more about the project.";
    }

    if (!values.consent) {
        errors.consent = "Privacy policy consent is required.";
    }

    return errors;
}

function ContactForm() {
    const [values, setValues] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");
    const [attachmentName, setAttachmentName] = useState("");

    const handleChange = (event) => {
        const { checked, name, type, value } = event.target;

        if (type === "file") {
            const file = event.target.files && event.target.files[0];
            setValues((currentValues) => ({
                ...currentValues,
                attachment: file || null,
            }));
            setAttachmentName(file ? file.name : "");
            return;
        }

        setValues((currentValues) => ({
            ...currentValues,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const nextErrors = validateForm(values);
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            setStatus("error");
            return;
        }

        setStatus("sending");

        window.setTimeout(() => {
            setStatus("success");
            setValues(initialForm);
        }, 650);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formGrid}>
                <label>
                    Full Name
                    <input
                        aria-invalid={Boolean(errors.name)}
                        name="name"
                        onChange={handleChange}
                        placeholder="Full Name"
                        value={values.name}
                    />
                    {errors.name && <span>{errors.name}</span>}
                </label>

                <label>
                    Company
                    <input
                        name="company"
                        onChange={handleChange}
                        placeholder="Company"
                        value={values.company}
                    />
                </label>
            </div>

            <label>
                Email Address
                <input
                    aria-invalid={Boolean(errors.email)}
                    name="email"
                    onChange={handleChange}
                    placeholder="Email Address"
                    type="email"
                    value={values.email}
                />
                {errors.email && <span>{errors.email}</span>}
            </label>

            <div className={styles.formGrid}>
                <label>
                    Project Type
                    <select
                        aria-invalid={Boolean(errors.projectType)}
                        name="projectType"
                        onChange={handleChange}
                        value={values.projectType}
                    >
                        <option value="">Project Type</option>
                        {projectTypes.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                    {errors.projectType && <span>{errors.projectType}</span>}
                </label>

                <label>
                    Estimated Budget
                    <select
                        name="budget"
                        onChange={handleChange}
                        value={values.budget}
                    >
                        <option value="">Budget</option>
                        {projectBudgets.map((budget) => (
                            <option key={budget} value={budget}>
                                {budget}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <label>
                Timeline
                <textarea
                    aria-invalid={Boolean(errors.message)}
                    name="message"
                    onChange={handleChange}
                    placeholder="Project Description"
                    rows="5"
                    value={values.message}
                />
                {errors.message && <span>{errors.message}</span>}
            </label>

            <label className={styles.fileLabel}>
                File Attachment
                <div className={styles.fileInputWrapper}>
                    <input
                        id="attachment"
                        name="attachment"
                        type="file"
                        onChange={handleChange}
                        className={styles.fileInput}
                    />
                    <div className={styles.fileName} aria-hidden>
                        {attachmentName || "File Attachment"}
                    </div>
                    <button
                        type="button"
                        className={styles.clearFile}
                        onClick={() => {
                            setValues((currentValues) => ({
                                ...currentValues,
                                attachment: null,
                            }));
                            setAttachmentName("");
                            // clear underlying input
                            const el = document.getElementById("attachment");
                            if (el) el.value = "";
                        }}
                        aria-label="Clear file"
                    >
                        ✕
                    </button>
                </div>
            </label>

            <label className={styles.checkbox}>
                <input
                    checked={values.consent}
                    name="consent"
                    onChange={handleChange}
                    type="checkbox"
                />
                I agree to the{" "}
                <a href="/privacy" className={styles.privacyLink}>
                    Privacy Policy
                </a>
            </label>
            {errors.consent && (
                <p className={styles.formError}>{errors.consent}</p>
            )}

            <button
                className={styles.submitButton}
                disabled={status === "sending"}
                type="submit"
            >
                {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
                <p className={styles.formSuccess}>
                    Message prepared successfully. Backend delivery can be
                    connected next.
                </p>
            )}
        </form>
    );
}

export function ContactPage() {
    return (
        <div className={styles.page}>
            <div className={styles.gridBackground} />
            <div className={styles.leftGlow} />
            <div className={styles.rightGlow} />

            <Container className={styles.container} size="wide">
                <section className={styles.hero}>
                    <div>
                        <h1>Let's Build Something Great</h1>
                        <p className={styles.lead}>
                            Have an idea, startup or business project? I'd love
                            to hear about it.
                        </p>
                        <p>
                            Whether you need a landing page, business website,
                            dashboard, SaaS platform or custom web application,
                            let's discuss how we can turn your ideas into
                            reality.
                        </p>
                        <div className={styles.actions}>
                            <Button as="a" href="#contact-form">
                                Schedule a Call
                            </Button>
                            <Button as="a" href="/projects" variant="secondary">
                                View Portfolio
                            </Button>
                        </div>
                        <span className={styles.availability}>
                            <span />
                            Currently Accepting New Projects
                        </span>
                    </div>

                    <aside className={styles.contactCard}>
                        {contactMethods.map((method) => (
                            <div
                                className={styles.contactMethod}
                                key={method.title}
                            >
                                <span className={styles.iconBox} />
                                <div>
                                    <strong>{method.title}</strong>
                                    <p>{method.detail}</p>
                                </div>
                            </div>
                        ))}
                        <div className={styles.socials}>
                            {socialLinks.map((link) => (
                                <Badge key={link}>{link}</Badge>
                            ))}
                        </div>
                    </aside>
                </section>

                <div className={styles.contentGrid}>
                    <section className={styles.formPanel} id="contact-form">
                        <ContactForm />
                    </section>

                    <aside className={styles.sidePanel}>
                        <section className={styles.optionSection}>
                            <h2>Project Type</h2>
                            <div className={styles.optionGrid}>
                                {projectTypes.map((type) => (
                                    <article
                                        className={styles.optionCard}
                                        key={type}
                                    >
                                        <span className={styles.iconBox} />
                                        <strong>{type}</strong>
                                    </article>
                                ))}
                            </div>
                        </section>

                        <section className={styles.optionSection}>
                            <h2>Project Budget</h2>
                            <div className={styles.budgetGrid}>
                                {projectBudgets.map((budget) => (
                                    <article
                                        className={styles.optionCard}
                                        key={budget}
                                    >
                                        <span className={styles.iconBox} />
                                        <strong>{budget}</strong>
                                    </article>
                                ))}
                            </div>
                        </section>

                        <section className={styles.processCard}>
                            <h2>Process Preview</h2>
                            <div className={styles.timeline}>
                                {processSteps.map((step, index) => (
                                    <span key={step}>
                                        Step {index + 1} · {step}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </aside>
                </div>

                <section className={styles.supportGrid}>
                    <div className={styles.reasonGrid}>
                        <h2>Why Contact Me</h2>
                        <div>
                            {contactReasons.map((reason) => (
                                <article
                                    className={styles.miniCard}
                                    key={reason}
                                >
                                    <span className={styles.iconBox} />
                                    <strong>{reason}</strong>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className={styles.faqCard}>
                        <h2>FAQ</h2>
                        {faqs.map((faq) => (
                            <details key={faq}>
                                <summary>{faq}</summary>
                                <p>
                                    Yes. I keep the process clear, practical and
                                    focused on outcomes.
                                </p>
                            </details>
                        ))}
                    </div>

                    <div className={styles.expectations}>
                        <h2>Client Expectations</h2>
                        {expectations.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                        <blockquote>
                            Great software starts with a great conversation.
                        </blockquote>
                    </div>
                </section>

                <ProjectCta
                    title="Let's Create Something Exceptional"
                    subtitle="I'm always excited to collaborate on ambitious ideas and modern software products."
                />
            </Container>
        </div>
    );
}
