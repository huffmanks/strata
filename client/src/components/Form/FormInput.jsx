const FormInput = ({ type, name, label, changeHandler, value }) => {
    return (
        <div className='relative text-gray-300 outline outline-none border-gray-400 border-2 rounded-xl focus-within:border-primary-alt'>
            <input type={type} name={name} required className='block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent' onChange={changeHandler} value={value} />
            <label htmlFor={name} className='absolute top-0 p-4 text-lg duration-300 origin-0'>
                {label}
            </label>
        </div>
    )
}

export default FormInput
