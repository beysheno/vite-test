import { FC } from 'react'
import styles from './pagination.module.sass'
import classNames from 'classnames'
import arrowLeft from '../../assets/icons/arrowLeft.svg'
import arrowRight from '../../assets/icons/arrowRight.svg'


interface PaginationProps {
    totalPages: number;
    onPageChange: (page: number) => void;
    currentPage: number;
    scrollTop?: boolean;
}

export const Pagination: FC<PaginationProps> = ({ totalPages, onPageChange, currentPage, scrollTop }) => {
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
            if (scrollTop) {
                window.scrollTo(0, 0);
            }
        }
    };

    const getPaginationButtons = (): (number | string)[] => {
        const buttons: (number | string)[] = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                buttons.push(i);
            }
        } else {
            if (currentPage <= 3) {
                buttons.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                buttons.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                buttons.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }

        return buttons;
    };

    return (
        <>
            {totalPages > 1 && (
                <div className={styles.pagination}>
                    <button
                        className={classNames(styles.btn, {[styles.disabled]: currentPage === 1})}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <img src={arrowLeft} alt="Next"/>
                    </button>

                    {getPaginationButtons().map((page, index) =>
                        typeof page === 'number' ? (
                            <button
                                key={index}
                                onClick={() => handlePageChange(page)}
                                className={classNames(styles.btn, {
                                    [styles.active]: currentPage === page,
                                })}
                            >
                                {page}
                            </button>
                        ) : (
                            <span key={index} className={styles.ellipsis}>{page}</span>
                        )
                    )}

                    <button
                        className={classNames(styles.btn, {[styles.disabled]: currentPage === totalPages})}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <img src={arrowRight} alt="Previous"/>
                    </button>
                </div>
            )}
        </>
    );
};
