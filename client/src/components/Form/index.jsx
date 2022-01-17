const Form = ({ submitHandler, children }) => {
    return (
        <form className='max-w-sm mx-auto bg-dark-alt rounded-lg shadow-xl overflow-hidden px-10 py-12' onSubmit={submitHandler}>
            {children}
        </form>
    )
}

export default Form
