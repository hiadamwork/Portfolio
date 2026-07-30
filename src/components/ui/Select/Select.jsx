import { ChevronDown } from "lucide-react";

import { cx } from "@/utils/cx";

import styles from "./Select.module.css";


export function Select({
    className,
    id,
    invalid,
    name,
    onChange,
    options = [],
    placeholder,
    value,
    ...props
}) {
    return (
        <div className={cx(styles.selectWrapper, className)}>
            <select
                aria-invalid={invalid || undefined}
                className={styles.select}
                id={id}
                name={name}
                onChange={onChange}
                value={value}
                {...props}
            >
                {placeholder && <option value="">{placeholder}</option>}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <ChevronDown aria-hidden="true" className={styles.chevron} />
        </div>
    );
}
