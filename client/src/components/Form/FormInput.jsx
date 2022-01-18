const FormInput = ({ type, name, label, changeHandler, value }) => {
    return (
        <div className='relative border-b-2 focus-within:border-primary-alt'>
            <input type={type} name={name} placeholder=' ' className='block w-full appearance-none focus:outline-none bg-transparent' onChange={changeHandler} value={value} />
            <label htmlFor={name} className='absolute top-0 duration-300 origin-0'>
                {label}
            </label>
        </div>
    )
}

export default FormInput
