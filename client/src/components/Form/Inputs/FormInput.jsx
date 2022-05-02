const FormInput = ({ type, name, label, changeHandler, inputValue }) => {
    return (
        <div className='text-input focus-within:border-primary-alt relative mb-10 border-b-2'>
            <input
                type={type}
                name={name}
                placeholder=' '
                className='peer block w-full appearance-none bg-transparent focus:outline-none'
                onChange={changeHandler}
                autoComplete='new-password'
                value={inputValue}
            />

            <label htmlFor={name} className='origin-0 absolute top-0 duration-300'>
                {label}
            </label>
        </div>
    )
}

export default FormInput
