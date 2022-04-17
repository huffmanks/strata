const FormRadio = ({ id, name, radioValue, isChecked, label }) => {
    return (
        <>
            <div className='flex h-5 w-5 items-center justify-center rounded-full border border-neutral-500'>
                <input id={id} type='radio' name={name} className='checked:bg-primary-main cursor-pointer appearance-none rounded-full p-[5px]' value={radioValue} defaultChecked={isChecked} />
            </div>
            <label htmlFor={id} className='text-light-main cursor-pointer pl-2 pr-4 text-sm'>
                {label}
            </label>
        </>
    )
}

export default FormRadio
