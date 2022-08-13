const FormCheckboxGroup = ({ label, changeHandler, children }) => {
    return (
        <div className='mb-5 text-gray-300'>
            {label && <label className='mb-2 block text-base text-light-main'>{label}</label>}
            <div className='flex flex-wrap items-center gap-x-6 gap-y-4' onChange={changeHandler}>
                {children}
            </div>
        </div>
    )
}

export default FormCheckboxGroup
