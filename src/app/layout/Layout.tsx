import {Outlet} from 'react-router-dom'
import {Header} from '../../widgets/header'
import {Footer} from '../../widgets/footer'
import {Button} from '../../shared/ui/button/button.tsx'
import {Pagination} from '../../shared/ui/pagination/pagination.tsx'
import {useState} from 'react'
import {Typography} from '../../shared/ui/typography/typography.tsx';

export const Layout = () => {
    const [page, setPage] = useState(1);
    return (
        <>
            <Header />
            <Outlet/>
            <Footer/>
            <Typography variant={'h1'} color={'black'} weight={'bold'}>
                Hi
            </Typography>
            <Button/>
            <Pagination totalPages={30} currentPage={page} onPageChange={setPage}/>
        </>
    )
}