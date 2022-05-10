const FormRadio = ({ id, name, radioValue, isChecked, label }) => {
    return (
        <div className='flex items-center gap-2'>
            <div className='flex h-5 w-5 items-center justify-center rounded-full border border-neutral-500'>
                <input id={id} type='radio' name={name} className='checked:bg-primary-main cursor-pointer appearance-none rounded-full p-[5px]' value={radioValue} defaultChecked={isChecked} />
            </div>
            <label htmlFor={id} className='text-light-main cursor-pointer text-sm'>
                {label}
            </label>
        </div>
    )
}

export default FormRadio
