import { camelize } from '../../utils/camelize'

const Table = ({ headCols, clickHandler, children }) => {
    return (
        <div className='table-responsive overflow-x-auto'>
            <table className='my-5 w-full'>
                <thead>
                    <tr className='border-b-2 border-gray-500 bg-neutral-800 text-left'>
                        {headCols.map((col) => (
                            <th key={col} id={camelize(col)} className='p-2.5 text-lg' onClick={clickHandler}>
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    )
}

export default Table
