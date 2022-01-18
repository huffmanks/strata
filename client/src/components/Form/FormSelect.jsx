const FormSelect = ({ id, label, changeHandler, children }) => {
    return (
        <div className='mb-6'>
            <label className='block mb-2' htmlFor={id}>
                {label}
            </label>

            <select className='block w-full p-1 bg-gray-600 text-sm rounded-lg border border-neutral-500 focus:border-primary-main' name={id} id={id} onChange={changeHandler}>
                {children}
            </select>
        </div>
    )
}

export default FormSelect
