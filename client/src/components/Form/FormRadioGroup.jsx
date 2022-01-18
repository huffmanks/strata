const FormRadioGroup = ({ changeHandler, label, children }) => {
    return (
        <div className='mb-4 text-gray-300' onChange={changeHandler}>
            <label className='block mb-2 text-light-main text-base'>{label}</label>
            {children}
        </div>
    )
}

export default FormRadioGroup
