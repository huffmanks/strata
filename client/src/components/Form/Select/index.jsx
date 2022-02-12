const Select = ({ title, children }) => {
    return (
        <>
            <div className='mb-2 text-base text-light-main'>{title}</div>

            <div className='relative mx-auto block w-full text-light-main'>{children}</div>
        </>
    )
}

export default Select
