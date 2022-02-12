const FormRadio = ({ id, name, radioValue, isDefault, label }) => {
    return (
        <>
            <div className='flex h-5 w-5 items-center justify-center rounded-full border border-neutral-500'>
                <input id={id} type='radio' name={name} className='cursor-pointer appearance-none rounded-full p-[5px] checked:bg-primary-main' value={radioValue} defaultChecked={isDefault} />
            </div>
            <label htmlFor={id} className='cursor-pointer pl-2 pr-4 text-sm text-light-main'>
                {label}
            </label>
        </>
    )
}

export default FormRadio
