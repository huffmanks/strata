import FormOptionItem from './FormOptionItem'

const FormOptionList = ({ groupName, isHidden, children }) => {
    return (
        <ul className='animate-hideSelect bg-primary-main absolute max-h-40 w-full list-none overflow-auto opacity-0 shadow-md delay-200 duration-300 peer-focus:opacity-100 peer-focus:[animation-name:none]'>
            <FormOptionItem labelFor='default' label={`Choose a ${groupName}:`} isHidden={isHidden} />
            {children}
        </ul>
    )
}

export default FormOptionList
