const FormSelectValue = ({ valueId, groupName, selectValue, isDefault, isChecked, isDisabled, changeHandler, selectLabel }) => {
    return (
        <div className='flex'>
            <input
                className='peer hidden'
                type='radio'
                id={valueId}
                name={groupName}
                value={selectValue}
                defaultChecked={isDefault}
                checked={isChecked}
                disabled={isDisabled}
                onChange={changeHandler}
            />
            <div className='hidden w-full rounded-lg bg-neutral-600 px-4 py-2 transition-all group-focus:rounded-b-[0] peer-checked:block'>{selectLabel}</div>
        </div>
    )
}

export default FormSelectValue
