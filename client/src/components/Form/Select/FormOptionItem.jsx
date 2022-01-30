const FormOptionItem = ({ labelFor, label }) => {
    return (
        // <option className='bg-gray-600' value={optionValue}>
        //     {label}
        // </option>
        <li>
            <label className='block p-4 bg-gray-700 cursor-pointer hover:bg-primary-alt focus:bg-primary-alt' htmlFor={labelFor} aria-hidden='aria-hidden'>
                {label}
            </label>
        </li>
        // <li>
        //     <label className='select-boz__option block p-4 bg-gray-700 cursor-pointer hover:bg-primary-alt focus:bg-primary-alt' htmlFor='2' aria-hidden='aria-hidden'>
        //         Team 2
        //     </label>
        // </li>
    )
}

export default FormOptionItem
