const FormRadio = ({ id, name, radioValue, isDefault, label }) => {
    return (
        <>
            <div className='flex justify-center items-center w-5 h-5 rounded-full border border-neutral-500'>
                <input id={id} type='radio' name={name} className='appearance-none p-[5px] rounded-full cursor-pointer checked:bg-primary-main' value={radioValue} defaultChecked={isDefault} />
            </div>
            <label htmlFor={id} className='pl-2 pr-4 text-sm text-light-main cursor-pointer'>
                {label}
            </label>
        </>
    )
}

export default FormRadio
