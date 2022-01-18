const Form = ({ isLarge, submitHandler, children }) => {
    const baseStyles = 'mx-auto bg-dark-alt rounded-lg shadow-xl overflow-hidden px-10 py-12'

    return (
        <form className={isLarge ? `max-w-xl ${baseStyles}` : `max-w-sm ${baseStyles}`} onSubmit={submitHandler}>
            {children}
        </form>
    )
}

export default Form
