const FormRadio = ({ id, name, radioValue, isDefault, label }) => {
    return (
        <>
            <input id={id} type='radio' name={name} className='w-4 h-4 appearance-none rounded-full border border-neutral-500 cursor-pointer checked:bg-primary-main' value={radioValue} defaultChecked={isDefault} />
            <label htmlFor={id} className='pl-2 pr-4 text-sm text-light-main cursor-pointer'>
                {label}
            </label>
        </>
    )
}

export default FormRadio
