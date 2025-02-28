import classNames from 'classnames'
import styles from './Typography.module.scss'
import { FC, ReactNode,JSX } from 'react'

type TVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'bodyText'| 'smallBodyText'
type TColors = 'black' | 'white'
type TWeights = 'regular' | 'medium' | 'semiBold' | 'bold'

type TTypography = {
    onClick?:()=> void,
    variant:TVariants,
    className?:string,
    color:TColors,
    children:ReactNode,
    weight:TWeights,
    truncate?:number
}

export const Typography:FC<TTypography> = (props) => {
    const {
        onClick,
        variant,
        className,
        color,
        children,
        weight,
        truncate
    } = props

    const Tags: Record<TVariants, keyof JSX.IntrinsicElements> = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        bodyText:'p',
        smallBodyText:'p',
    }

    const classNamedGenerated = classNames(
        styles[variant],
        styles[color],
        styles[weight],
        className
    )

    const TagName = Tags[variant]

    const truncateString = (str:ReactNode, maxNumber:number):ReactNode => {
        if (typeof str === 'string') {
            return str.length <= maxNumber ? str : str.slice(0, maxNumber) + '...'
        }
        return str
    }

    return (
        <TagName onClick={onClick} className={classNamedGenerated} >
            {truncate ? truncateString(children,truncate) : children}
        </TagName>
    )
}