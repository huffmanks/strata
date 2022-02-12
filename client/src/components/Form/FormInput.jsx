const FormInput = ({ isVisible, type, name, label, changeHandler, inputValue }) => {
    return (
        <div className={!isVisible ? 'text-input relative mb-10 border-b-2 focus-within:border-primary-alt' : 'hidden'}>
            <input type={type} name={name} placeholder=' ' className='peer block w-full appearance-none bg-transparent focus:outline-none' onChange={changeHandler} autoComplete='new-password' value={inputValue} readOnly={isVisible ? 'readonly' : ''} />

            <label htmlFor={name} className='absolute top-0 origin-0 duration-300'>
                {label}
            </label>
        </div>
    )
}

export default FormInput
