const FormOptionList = ({ children }) => {
    return <ul className='peer-focus:opacity-100 peer-focus:[animation-name:none] absolute w-full bg-primary-main list-none shadow-md opacity-0 duration-300 delay-200 animate-hideSelect'>{children}</ul>
}

export default FormOptionList
