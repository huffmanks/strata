import { MdAccountCircle } from 'react-icons/md'

const FormFile = ({ name, label, changeHandler, previewImg }) => {
    return (
        <div className='flex items-center gap-5 mb-5 '>
            {!previewImg ? <MdAccountCircle className='w-12 h-12 stroke-current' /> : <img className='w-12 h-12 object-cover rounded-full' src={previewImg} />}
            <>
                <label htmlFor={name} className='p-2 bg-primary-main text-sm rounded-lg border border-neutral-500 cursor-pointer active:border-primary-main'>
                    {label}
                </label>
            </>
            <input id={name} type='file' name={name} className='absolute w-0 h-0 opacity-0' onChange={changeHandler} />
        </div>
    )
}

export default FormFile
