const FormFile = ({ name, label, changeHandler, inputValue }) => {
    return (
        <div className='mb-4'>
            <label htmlFor={name} className='block mb-2 text-sm'>
                {label}
            </label>
            <input id={name} type='file' name={name} className='block w-full appearance-none text-sm bg-gray-600 rounded-lg cursor-pointer focus:outline-none' onChange={changeHandler} value={inputValue} />
        </div>
    )
}

export default FormFile
