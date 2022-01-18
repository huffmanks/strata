const FormRadioGroup = ({ changeHandler, label, children }) => {
    return (
        <div className='text-gray-300' onChange={changeHandler}>
            <label className='block mb-2 text-light-main text-lg'>{label}</label>
            {children}
        </div>
    )
}

export default FormRadioGroup
