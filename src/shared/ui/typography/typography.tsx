import classNames from 'classnames';
import styles from './typography.module.scss';
import { FC, ReactNode, JSX } from 'react';

type TVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'bodyText' | 'titles' | 'buttons' | 'smallBodyText';
type TColors = 'black' | 'white';
type TWeights = 'medium' | 'semiBold' | 'bold';

type TTypography = {
    onClick?: () => void;
    variant: TVariants;
    className?: string;
    color: TColors;
    children: ReactNode;
    weight: TWeights;
    truncate?: number;
};

export const Typography: FC<TTypography> = ({
                                                onClick,
                                                variant,
                                                className,
                                                color,
                                                children,
                                                weight,
                                                truncate
                                            }) => {

    const Tags: Record<TVariants, keyof JSX.IntrinsicElements> = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        titles: 'span', // исправлено (был пустой `''`)
        buttons: 'span', // исправлено (был пустой `''`)
        bodyText: 'p',
        smallBodyText: 'p'
    };

    const classNamedGenerated = classNames(
        styles[variant],
        styles[color],
        styles[weight],
        className
    );

    const TagName = Tags[variant] || 'span'; // добавлена защита на случай ошибки

    const truncateString = (str: ReactNode, maxNumber: number): ReactNode => {
        if (typeof str === 'string') {
            return str.length <= maxNumber ? str : str.slice(0, maxNumber) + '...';
        }
        return str;
    };

    return (
        <TagName onClick={onClick} className={classNamedGenerated}>
            {truncate ? truncateString(children, truncate) : children}
        </TagName>
    );
};
