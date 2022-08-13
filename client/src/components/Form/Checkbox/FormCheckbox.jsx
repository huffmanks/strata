const FormCheckbox = ({ isVisible, id, name, inputValue, checked, label }) => {
    return (
        <div className={!isVisible ? 'group relative flex items-center' : 'hidden'}>
            <input
                type='checkbox'
                id={id}
                placeholder=' '
                className='apperance-none peer absolute'
                autoComplete='new-password'
                name={name}
                value={inputValue}
                defaultChecked={checked}
                readOnly={isVisible ? 'readonly' : ''}
            />

            <div className='absolute top-0 left-0 h-5 w-5 rounded-sm bg-neutral-500 after:absolute after:top-[5px] after:left-2 after:hidden after:h-[10px] after:w-1.5 after:rotate-45 after:rounded-sm after:rounded-br-sm after:border-t-0 after:border-r-[3px] after:border-b-[3px] after:border-l-0 after:border-light-main group-hover:bg-primary-alt peer-checked:bg-primary-main peer-checked:after:block'></div>

            <label htmlFor={id} className='z-10 w-full cursor-pointer pl-7 text-sm text-light-main'>
                {label}
            </label>
        </div>
    )
}

export default FormCheckbox
