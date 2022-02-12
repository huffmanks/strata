const FormOptionItem = ({ labelFor, label }) => {
    return (
        <li className='overflow-hidden last-of-type:rounded-b-lg'>
            <label className='block cursor-pointer bg-gray-700 px-4 py-2 hover:bg-primary-alt focus:bg-primary-alt' htmlFor={labelFor} aria-hidden='aria-hidden'>
                {label}
            </label>
        </li>
    )
}

export default FormOptionItem
