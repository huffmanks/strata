const FormOptionList = ({ children }) => {
    return <ul className='absolute w-full max-h-40 bg-primary-main list-none shadow-md overflow-auto opacity-0 duration-300 delay-200 animate-hideSelect peer-focus:opacity-100 peer-focus:[animation-name:none]'>{children}</ul>
}

export default FormOptionList
