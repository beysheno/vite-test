import {FC, ReactNode} from 'react'
import styles from './CustomButton.module.scss'
import classNames from "classnames";
import {Link} from 'react-router-dom'
import {Typography} from "../typography";

interface ButtonProps {
    variant: 'primary' | 'secondary' | 'textButton' | 'iconButton' | 'cardButton',
    actionType: 'button' | 'link',
    children: ReactNode,
    className?: string,
    onClick?: () => void,
    type?: 'button',
    disabled?: boolean,
    isTextBtn?: boolean,
    to?: string,
    target?: string,
}


export const CustomButton: FC<ButtonProps> = ({
    variant,
    children,
    actionType,
    className,
    onClick,
    type,
    disabled,
    isTextBtn,
    to,
    target,
                                              }) => {

    const classNamedGenerated = classNames(
        styles.general,
        styles[variant],
        disabled && styles.disabled,
        className
    )

    const ButtonComponent = actionType === 'link' ? Link:'button';
    const actionAttributes = actionType === 'link' ? {to,target}:{onClick,type};


    return(
            <ButtonComponent className={classNamedGenerated} {...actionAttributes} >
                {isTextBtn ? <Typography variant={'h5'} color={"black"} weight={"semiBold"}>{children}</Typography>:children}
            </ButtonComponent>

    )
}