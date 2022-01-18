const FormSelect = ({ id, label, changeHandler, children }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>

            <select name={id} id={id} onChange={changeHandler}>
                {children}
            </select>
        </>
    )
}

export default FormSelect
