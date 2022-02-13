import { MdAccountCircle } from 'react-icons/md'

const FormFile = ({ name, label, changeHandler, previewImg }) => {
    return (
        <div className='mb-5 flex items-center gap-5 '>
            {!previewImg ? <MdAccountCircle className='h-12 w-12 stroke-current' /> : <img className='h-12 w-12 rounded-full object-cover' src={previewImg} />}
            <>
                <label htmlFor={name} className='bg-primary-main active:border-primary-main cursor-pointer rounded-lg border border-neutral-500 p-2 text-sm'>
                    {label}
                </label>
            </>
            <input id={name} type='file' name={name} className='absolute h-0 w-0 opacity-0' onChange={changeHandler} />
        </div>
    )
}

export default FormFile
