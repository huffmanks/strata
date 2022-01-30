const Select = ({ title, children }) => {
    return (
        <>
            <div className='mb-2 text-light-main text-base'>{title}</div>

            <div className='relative block w-full mx-auto text-light-main'>{children}</div>
        </>
    )
}

export default Select
