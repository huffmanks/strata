const FormRadioGroup = ({ changeHandler, label, children }) => {
    return (
        <div className='mb-5 text-gray-300' onChange={changeHandler}>
            <label className='text-light-main mb-2 block text-base'>{label}</label>
            <div className='flex items-center'>{children}</div>
        </div>
    )
}

export default FormRadioGroup
