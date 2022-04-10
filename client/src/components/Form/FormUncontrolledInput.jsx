const FormUncontrolledInput = ({ isVisible, type, name, label, changeHandler, defaultValue }) => {
    return (
        <div className={!isVisible ? 'text-input focus-within:border-primary-alt relative mb-10 border-b-2' : 'hidden'}>
            <input
                hidden={isVisible ? 'hidden' : ''}
                type={type}
                name={name}
                placeholder=' '
                className='peer block w-full appearance-none bg-transparent focus:outline-none'
                onChange={!isVisible ? changeHandler : null}
                autoComplete='username'
                defaultValue={defaultValue}
                readOnly={isVisible ? 'readonly' : ''}
            />

            <label htmlFor={name} className='origin-0 absolute top-0 duration-300'>
                {label}
            </label>
        </div>
    )
}

export default FormUncontrolledInput
