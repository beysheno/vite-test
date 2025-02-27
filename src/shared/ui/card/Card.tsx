import {FC, ReactNode} from "react";
import classNames from "classnames";
import {Typography} from "../typography/Typography.tsx";
import styles from "./Card.module.scss";


interface CardProps {
    photo: string;
    title: string;
    subtitle: string;
    date: string;
    children?: ReactNode;
    className?: string;
}
export const Card: FC<CardProps> = ({photo, title, subtitle, date, className, children}) => {
    return (
        <div className={classNames(styles.card, className)}>
            <div className={styles.imgWrapper}>
                <img src={photo} alt={title} className={styles.photo}/>
            </div>
            <div className={styles.content}>
                <Typography variant={"h3"} color={'black'} weight={"bold"} className={styles.title}>
                    {title}
                </Typography>
                <Typography variant={"bodyText"} weight={'regular'} color={'black'}>
                    {subtitle}
                </Typography>
                <Typography variant={'smallBodyText'} weight={'regular'} color={'black'}>
                    {date}
                </Typography>
                <div className={styles.actions}>{children}</div>
            </div>
        </div>
    )
}