const FormRadio = ({ id, name, value, label }) => {
    return (
        <>
            <input id={id} type='radio' name={name} className='p-4' value={value} />
            <label htmlFor={id} className='p-4 text-light-main text-sm'>
                {label}
            </label>
        </>
    )
}

export default FormRadio
