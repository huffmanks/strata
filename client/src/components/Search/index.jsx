import { useGlobalState } from '../../hooks/useContext'
import FormInput from '../Form/Inputs/FormInput'

const Search = () => {
    const { count, value, onChange } = useGlobalState()
    return (
        <>
            <FormInput type='text' name='search' label='Search' changeHandler={onChange} inputValue={value} />
            <div>{count}</div>
        </>
    )
}

export default Search
