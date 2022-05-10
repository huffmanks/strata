const FormCheckboxGroup = ({ label, children }) => {
    return (
        <div className='mb-5 text-gray-300'>
            <label className='text-light-main mb-2 block text-base'>{label}</label>
            <div className='flex flex-wrap items-center gap-x-6 gap-y-4'>{children}</div>
        </div>
    )
}

export default FormCheckboxGroup
