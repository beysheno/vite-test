import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import styles from "./Input.Module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: ReactNode;
    className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, icon, className, ...props }, ref) => {
        return (
            <div className={classNames(styles.inputWrapper, className)}>
                {label && <label className={styles.label}>{label}</label>}

                <div className={classNames(styles.inputContainer, { [styles.error]: error })}>
                    {icon && <span className={styles.icon}>{icon}</span>}
                    <input ref={ref} className={styles.input} {...props} />
                </div>

                {error && <span className={styles.errorText}>{error}</span>}
            </div>
        );
    }
);