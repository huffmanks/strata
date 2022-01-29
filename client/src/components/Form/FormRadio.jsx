const FormRadio = ({ id, name, radioValue, label }) => {
    return (
        <>
            <input id={id} type='radio' name={name} className='p-4' value={radioValue} />
            <label htmlFor={id} className='p-4 text-light-main text-sm'>
                {label}
            </label>
        </>
    )
}

export default FormRadio
