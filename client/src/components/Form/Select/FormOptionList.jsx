const FormOptionList = ({ children }) => {
    return <ul className='absolute max-h-40 w-full animate-hideSelect list-none overflow-auto bg-primary-main opacity-0 shadow-md delay-200 duration-300 peer-focus:opacity-100 peer-focus:[animation-name:none]'>{children}</ul>
}

export default FormOptionList
