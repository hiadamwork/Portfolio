import { useState } from 'react'

const initialForm = {
    name: '',
    company: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    consent: false,
    attachment: null,
}

function validateForm(values) {
    const errors = {}

    if (values.name.trim().length < 2) {
        errors.name = 'Please enter your full name.'
    }

    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = 'Please enter a valid email address.'
    }

    if (!values.projectType) {
        errors.projectType = 'Choose a project type.'
    }

    if (values.message.trim().length < 10) {
        errors.message = 'Tell me a little more about the project.'
    }

    if (!values.consent) {
        errors.consent = 'Privacy policy consent is required.'
    }

    return errors
}

export function useContactForm() {
    const [values, setValues] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('idle')
    const [attachmentName, setAttachmentName] = useState('')

    const handleChange = (event) => {
        const { checked, files, name, type, value } = event.target

        if (type === 'file') {
            const file = files?.[0]
            setValues((currentValues) => ({
                ...currentValues,
                attachment: file || null,
            }))
            setAttachmentName(file ? file.name : '')
            return
        }

        setValues((currentValues) => ({
            ...currentValues,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const clearAttachment = () => {
        setValues((currentValues) => ({
            ...currentValues,
            attachment: null,
        }))
        setAttachmentName('')
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const nextErrors = validateForm(values)
        setErrors(nextErrors)

        if (Object.keys(nextErrors).length > 0) {
            setStatus('error')
            return
        }

        setStatus('sending')

        window.setTimeout(() => {
            setStatus('success')
            setValues(initialForm)
            setAttachmentName('')
        }, 650)
    }

    return {
        attachmentName,
        clearAttachment,
        errors,
        handleChange,
        handleSubmit,
        status,
        values,
    }
}
