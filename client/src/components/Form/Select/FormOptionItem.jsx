const FormOptionItem = ({ labelFor, label, isHidden }) => {
    return (
        <li className={isHidden ? 'hidden' : 'overflow-hidden last-of-type:rounded-b-lg'}>
            <label className='hover:bg-primary-alt focus:bg-primary-alt block cursor-pointer bg-gray-700 px-4 py-2' htmlFor={labelFor} aria-hidden='aria-hidden'>
                {label}
            </label>
        </li>
    )
}

export default FormOptionItem
