const FormSelectValue = ({ valueId, groupName, selectValue, isDefault, isDisabled }) => {
    return (
        <div className='flex'>
            <input className='peer hidden' type='radio' id={valueId} name={groupName} value={selectValue} defaultChecked={isDefault} disabled={isDisabled} />
            <div className='hidden w-full px-4 py-2 bg-neutral-600 rounded-lg transition-all group-focus:rounded-b-[0] peer-checked:block'>{selectValue}</div>
        </div>
    )
}

export default FormSelectValue
