const GridList = ({ children }) => {
    return (
        <>
            <div className='my-8 grid grid-cols-[repeat(auto-fill,_minmax(min(300px,_100%),_1fr))] gap-5'>{children}</div>
        </>
    )
}

export default GridList
