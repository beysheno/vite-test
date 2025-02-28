// import { FC } from 'react'
// import styles from './pagination.module.sass'
//
// interface PaginationProps {
//     totalPages: number
//     currentPage: number
//     onPageChange: (page: number) => void
// }
//
// export const Pagination: FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
//     return (
//         <div className={styles.pagination}>
//             <button
//                 className={`${styles.pageButton} ${currentPage === 1 ? styles.disabled : ""}`}
//                 onClick={() => onPageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//             >
//                 &lt;
//             </button>
//
//             {[...Array(totalPages)].map((_, i) => (
//                 <button
//                     key={i}
//                     className={`${styles.pageButton} ${currentPage === i + 1 ? styles.active : ""}`}
//                     onClick={() => onPageChange(i + 1)}
//                 >
//                     {i + 1}
//                 </button>
//             ))}
//
//             <button
//                 className={`${styles.pageButton} ${currentPage === totalPages ? styles.disabled : ""}`}
//                 onClick={() => onPageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//             >
//                 &gt;
//             </button>
//         </div>
//     )
// }

// cnjg
// import React from 'react'
// import styles from './pagination.module.sass'
// import { usePaginationStore } from './paginationStore.ts'
// import { Button } from '../button/Button'
//
// interface PaginationProps {
//     totalPages: number
//     currentPage: number
//     onPageChange: (page: number) => void
// }
//
// const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
//     const { setPage } = usePaginationStore()
//
//     const getPaginationItems = (): (number | string)[] => {
//         const pages: (number | string)[] = []
//         const showDots = totalPages > 7
//
//         if (!showDots) {
//             for (let i = 1; i <= totalPages; i++) {
//                 pages.push(i)
//             }
//         } else {
//             pages.push(1)
//             if (currentPage > 4) pages.push('...')
//             for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
//                 pages.push(i)
//             }
//             if (currentPage < totalPages - 3) pages.push('...')
//             pages.push(totalPages)
//         }
//
//         return pages
//     }
//
//     return (
//         <div className={styles.pagination}>
//             <Button
//                 className={`${styles.pageButton} ${currentPage === 1 ? styles.disabled : ''}`}
//                 onClick={() => currentPage > 1 && setPage(currentPage - 1)}
//             >
//                 {'<'}
//             </Button>
//             {getPaginationItems().map((item, index) => (
//                 <Button
//                     key={index}
//                     className={`${styles.pageButton} ${item === currentPage ? styles.active : ''}`}
//                     onClick={() => typeof item === 'number' && setPage(item)}
//
//                 >
//                     {item}
//                 </Button>
//             ))}
//             {/*<Button*/}
//             {/*    className={`${styles.pageButton} ${currentPage === totalPages ? styles.disabled : ''}`}*/}
//             {/*    onClick={() => currentPage < totalPages && setPage(currentPage + 1)}*/}
//             {/*>*/}
//             {/*    {'>'}*/}
//             {/*</Button>*/}
//             <Button
//                 className={`${styles.pageButton} ${currentPage === 1 ? styles.disabled : ''}`}
//                 onClick={() => currentPage > 1 && setPage(currentPage - 1)}
//                 disabled={currentPage === 1}
//             >
//                 {'<'}
//             </Button>
//
//         </div>
//     )
// }
//
// export { Pagination }

// import React from 'react';
// import styles from './pagination.module.sass';
// import { usePaginationStore } from './paginationStore';  // импорт сторa
// import { Button } from '../button/Button';
//
// interface PaginationProps {
//     totalPages: number;
//     currentPage: number;
// }
//
// const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
//     const { setPage } = usePaginationStore();  // хук для изменения страницы
//
//     const getPaginationItems = (): (number | string)[] => {
//         const pages: (number | string)[] = [];
//         const showDots = totalPages > 7;  // показываем многоточие если страниц больше 7
//
//         if (!showDots) {
//             for (let i = 1; i <= totalPages; i++) {
//                 pages.push(i);  // просто добавляем все страницы
//             }
//         } else {
//             pages.push(1);
//             if (currentPage > 4) pages.push('...');  // добавляем многоточие
//             for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
//                 pages.push(i);
//             }
//             if (currentPage < totalPages - 3) pages.push('...');  // добавляем многоточие в конце
//             pages.push(totalPages);
//         }
//
//         return pages;
//     };
//
//     return (
//         <div className={styles.pagination}>
//             <Button
//                 className={`${styles.pageButton} ${currentPage === 1 ? styles.disabled : ''}`}
//                 onClick={() => currentPage > 1 && setPage(currentPage - 1)}  // кнопка назад
//                 disabled={currentPage === 1}
//             >
//                 {'<'}
//             </Button>
//
//             {getPaginationItems().map((item, index) => (
//                 // <Button
//                 //     key={index}  // уникальный ключ для кнопок
//                 //     className={`${styles.pageButton} ${item === currentPage ? styles.active : ''}`}
//                 //     onClick={() => typeof item === 'number' && setPage(item)}  // переход на страницу
//                 // >
//                 //     {item}
//                 // </Button>
//                 <Button
//                     key={index}
//                     className={`${styles.pageButton} ${item === currentPage ? styles.active : ''} ${typeof item === 'string' ? styles.dots : ''}`}
//                     onClick={() => {
//                         if (typeof item === 'number') {
//                             console.log('Page change to:', item);  // Лог для отслеживания кликов
//                             setPage(item);
//                         }
//                     }}
//                     disabled={typeof item === 'string' || currentPage === item}  // Делаем кнопку неактивной, если это многоточие или текущая страница
//                 >
//                     {item}
//                 </Button>
//             ))}
//
//             <Button
//                 className={`${styles.pageButton} ${currentPage === totalPages ? styles.disabled : ''}`}
//                 onClick={() => currentPage < totalPages && setPage(currentPage + 1)}  // кнопка вперед
//                 disabled={currentPage === totalPages}
//             >
//                 {'>'}
//             </Button>
//         </div>
//     );
// };
//
// export { Pagination };

import React, { useState } from 'react'
import styles from './pagination.module.sass'
import { Button } from '../button/button.tsx'

interface PaginationProps {
    totalPages: number
    currentPage: number
    onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    const [page, setPage] = useState(currentPage)

    // Функция для получения элементов пагинации
    const getPaginationItems = (): (number | string)[] => {
        const pages: (number | string)[] = []
        const showDots = totalPages > 7

        if (!showDots) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            pages.push(1)
            if (page > 4) pages.push('...')
            for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
                pages.push(i)
            }
            if (page < totalPages - 3) pages.push('...')
            pages.push(totalPages)
        }

        return pages
    }

    const handlePageChange = (newPage: number) => {
        if (newPage !== page && newPage > 0 && newPage <= totalPages) {
            setPage(newPage)
            onPageChange(newPage)  // Если хочешь передавать обновленное состояние родителю
        }
    }

    return (
        <div className={styles.pagination}>
            <Button
                className={`${styles.pageButton} ${page === 1 ? styles.disabled : ''}`}
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
            >
                {'<'}
            </Button>

            {getPaginationItems().map((item, index) => (
                <Button
                    key={index}
                    className={`${styles.pageButton} ${item === page ? styles.active : ''} ${typeof item === 'string' ? styles.dots : ''}`}
                    onClick={() => {
                        if (typeof item === 'number') {
                            handlePageChange(item)
                        }
                    }}
                    disabled={typeof item === 'string'}  // Отключаем многоточие
                >
                    {item}
                </Button>
            ))}

            <Button
                className={`${styles.pageButton} ${page === totalPages ? styles.disabled : ''}`}
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
            >
                {'>'}
            </Button>
        </div>
    )
}

export { Pagination }
