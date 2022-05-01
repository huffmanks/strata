const Select = ({ title, children }) => {
    return (
        <>
            <div className='text-light-main mb-2 text-base'>{title}</div>

            <div className='text-light-main relative mx-auto mb-5 block w-full'>{children}</div>
        </>
    )
}

export default Select
