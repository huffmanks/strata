import FormSelectValue from './FormSelectValue'

const FormSelectBox = ({ defaultName, defaultValue, children }) => {
    return (
        <div className='group peer relative shadow-md outline-none cursor-pointer' tabIndex='1'>
            <FormSelectValue valueId='default' groupName={defaultName} selectValue={defaultValue} isDefault={true} isDisabled={true} />

            <>{children}</>

            <img className='absolute top-1/2 right-4 w-5 opacity-70 -translate-y-1/2 transition-all group-focus:-translate-y-1/2 group-focus:rotate-180' src='https://cdn.onlinewebfonts.com/svg/img_295694.svg' alt='Arrow Icon' aria-hidden='true' />
        </div>
    )
}

export default FormSelectBox
