const Table = ({ headCols, children }) => {
    return (
        <div className='my-5 w-full'>
            <div className='flex gap-2 border-b-2 border-gray-500 bg-neutral-800 text-left'>
                {headCols.map((col) => (
                    <div key={col} className='p-2.5 text-lg'>
                        {col}
                    </div>
                ))}
            </div>

            {children}
        </div>
    )
}

export default Table
