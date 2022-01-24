const FormInput = ({ isVisible, type, name, label, changeHandler, autoComplete, inputValue }) => {
    return (
        <div className={!isVisible ? 'relative mb-10 border-b-2 focus-within:border-primary-alt' : 'hidden'}>
            <input type={type} name={name} placeholder=' ' className='block w-full appearance-none focus:outline-none bg-transparent' onChange={changeHandler} autoComplete={autoComplete} value={inputValue} readOnly={isVisible ? 'readonly' : ''} />

            <label htmlFor={name} className='absolute top-0 duration-300 origin-0'>
                {label}
            </label>
        </div>
    )
}

export default FormInput
