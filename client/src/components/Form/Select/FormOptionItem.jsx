const FormOptionItem = ({ labelFor, label }) => {
    return (
        <li className='last-of-type:rounded-b-lg overflow-hidden'>
            <label className='block px-4 py-2 bg-gray-700 cursor-pointer hover:bg-primary-alt focus:bg-primary-alt' htmlFor={labelFor} aria-hidden='aria-hidden'>
                {label}
            </label>
        </li>
    )
}

export default FormOptionItem
