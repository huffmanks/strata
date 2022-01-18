const FormFile = ({ name, label, changeHandler, value }) => {
    return (
        <div className='relative'>
            <input type='file' name={name} className='block w-full appearance-none focus:outline-none bg-transparent' onChange={changeHandler} value={value} />
            <label htmlFor={name} className='absolute top-0 origin-0'>
                {label}
            </label>
        </div>
    )
}

export default FormFile
