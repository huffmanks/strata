import FormSelectValue from './FormSelectValue'

const FormSelectBox = ({ inputName, children }) => {
    return (
        <div className='group peer relative shadow-md outline-none cursor-pointer'>
            {/* <div className='select-boz__value flex'>
                <input className='select-boz__input peer hidden' type='radio' id='0' value='1' name='Ben' defaultChecked disabled />
                <div className='select-boz__input-text hidden w-full p-4 bg-neutral-600 peer-checked:block'>Select a team:</div>
            </div> */}

            <FormSelectValue id='default' name={inputName} selectValue='Choose a team:' isDefault={true} />
            {/* isDisabled={true} */}

            <>{children}</>

            {/* <div className='select-boz__value flex'>
                <input className='select-boz__input peer hidden' type='radio' id='1' value='2' name='Ben' />
                <div className='select-boz__input-text hidden w-full p-4 bg-neutral-600 peer-checked:block'>Team 1</div>
            </div>
            <div className='select-boz__value flex'>
                <input className='select-boz__input peer hidden' type='radio' id='2' value='3' name='Ben' />
                <div className='select-boz__input-text hidden w-full p-4 bg-neutral-600 peer-checked:block'>Team 2</div>
            </div> */}

            <img className='group-focus:-translate-y-1/2 group-focus:rotate-180 absolute top-1/2 right-4 w-5 opacity-30 -translate-y-1/2 transition-all' src='https://cdn.onlinewebfonts.com/svg/img_295694.svg' alt='Arrow Icon' aria-hidden='true' />
        </div>
    )
}

export default FormSelectBox
