import { FC, ButtonHTMLAttributes } from 'react'
import styles from './button.module.sass'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

export const Button: FC<ButtonProps> = ({ variant = "primary", className = "", ...props }) => {
    return (
        <button className={`${styles.button} ${styles[variant]} ${className}`} {...props} />
    );
};
