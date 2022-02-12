const FormRadioGroup = ({ changeHandler, label, children }) => {
    return (
        <div className='mb-5 text-gray-300' onChange={changeHandler}>
            <label className='mb-2 block text-base text-light-main'>{label}</label>
            <div className='flex items-center'>{children}</div>
        </div>
    )
}

export default FormRadioGroup
