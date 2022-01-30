const FormRadioGroup = ({ changeHandler, label, children }) => {
    return (
        <div className='mb-5 text-gray-300' onChange={changeHandler}>
            <label className='block mb-2 text-light-main text-base'>{label}</label>
            <div className='flex items-center'>{children}</div>
        </div>
    )
}

export default FormRadioGroup
