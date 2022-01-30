const FormSelectValue = ({ inputId, inputName, selectValue, isDefault }) => {
    return (
        <div className='flex'>
            {/* disabled={isDisabled} */}
            <input className='peer hidden' type='radio' id={inputId} name={inputName} value={selectValue} defaultChecked={isDefault} />
            <div className='hidden w-full p-4 bg-neutral-600 rounded-lg peer-checked:block'>{selectValue}</div>
        </div>
    )
}

export default FormSelectValue
