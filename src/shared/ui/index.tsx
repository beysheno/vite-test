import { useState } from 'react'
import { Button } from './button/button.tsx'
import { Pagination } from './pagination/pagination.tsx'

export const App = () => {
    const [page, setPage] = useState(1);

    return (
        <div>
            <h1>Pagination</h1>
    <Button onClick={() => alert("Clicked!")} variant="primary">Primary Button</Button>
    <Pagination totalPages={10} currentPage={page} onPageChange={setPage} />
    </div>
)
}