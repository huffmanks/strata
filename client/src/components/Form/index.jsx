const Form = ({ isLarge, submitHandler, children }) => {
    const baseStyles = 'mx-auto bg-dark-alt rounded-lg shadow-xl md:px-10 md:py-12 px-6 py-9'

    return (
        <form className={isLarge ? `max-w-xl ${baseStyles}` : `max-w-sm ${baseStyles}`} onSubmit={submitHandler}>
            {children}
        </form>
    )
}

export default Form
