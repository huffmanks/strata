import { MdArrowDropDown } from 'react-icons/md'

const Table = ({ getTableProps, getTableBodyProps, headerGroups, rows, prepareRow }) => {
    return (
        <div className='table-responsive overflow-x-auto'>
            <table className='my-5 w-full' {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr key={headerGroup.headers} className='border-b-2 border-gray-500 bg-neutral-800 text-left' {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th key={column} className='p-2.5 text-lg' {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    <div className='flex items-center gap-1'>
                                        <span>{column.render('Header')}</span>
                                        <span>{column.isSorted ? column.isSortedDesc ? <MdArrowDropDown className='h-6 w-6' /> : <MdArrowDropDown className='h-6 w-6 rotate-180' /> : ''}</span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr key={i} className='cursor-pointer even:bg-dark-alt hover:bg-neutral-700' {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            key={cell}
                                            className={cell.column.Header === 'View' || cell.column.Header === 'Edit' || cell.column.Header === 'Delete' ? 'w-5' : 'p-2.5'}
                                            {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
