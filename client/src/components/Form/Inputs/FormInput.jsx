const FormInput = ({ type, name, label, changeHandler, inputValue }) => {
    return (
        <div className='text-input relative mb-10 border-b-2 focus-within:border-primary-alt'>
            <input
                type={type}
                name={name}
                placeholder=' '
                className='peer block w-full appearance-none bg-transparent focus:outline-none'
                onChange={changeHandler}
                autoComplete='new-password'
                defaultValue={inputValue}
            />

            <label htmlFor={name} className='absolute top-0 origin-0 duration-300'>
                {label}
            </label>
        </div>
    )
}

export default FormInput
