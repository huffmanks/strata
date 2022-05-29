import FormInput from '../Form/Inputs/FormInput'

const DefaultFilter = ({ column: { filterValue, preFilteredRows, setFilter } }) => {
    const count = preFilteredRows.length

    return (
        <>
            <FormInput
                type='text'
                name='search'
                label='Search'
                changeHandler={(e) => {
                    setFilter(e.target.value || undefined)
                }}
                inputValue={filterValue || ''}
            />
            <div>{count}</div>
        </>
    )
}

export default DefaultFilter
