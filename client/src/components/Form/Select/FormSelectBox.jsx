import FormSelectValue from './FormSelectValue'
import { MdKeyboardArrowDown } from 'react-icons/md'

const FormSelectBox = ({ defaultName, isDefault, isDisabled, changeHandler, children }) => {
    return (
        <div className='group peer relative cursor-pointer shadow-md outline-none' tabIndex='1'>
            <FormSelectValue
                valueId='default'
                groupName={defaultName}
                selectLabel={`Choose a ${defaultName}:`}
                selectValue={''}
                isDefault={isDefault}
                isDisabled={isDisabled}
                changeHandler={changeHandler}
            />

            <>{children}</>

            <MdKeyboardArrowDown
                className='absolute top-1/2 right-4 h-6 w-6 -translate-y-1/2 opacity-70 transition-all group-focus:-translate-y-1/2 group-focus:rotate-180'
                alt='Arrow Icon'
                aria-hidden='true'
            />
        </div>
    )
}

export default FormSelectBox
