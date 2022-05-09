import { MdOutlineClose } from 'react-icons/md'

const ButtonClose = ({ variant, clickHandler }) => {
    const baseStyles = 'text-light-main ml-auto inline-flex items-center rounded-lg p-1.5 text-sm outline-none'

    const primary = 'bg-dark-main hover:bg-primary-alt'
    const secondary = 'hover:bg-primary-main'

    return (
        <button type='button' variant={variant} className={`${baseStyles} ${variant === 'primary' ? primary : secondary}`} aria-label='close'>
            <MdOutlineClose className='h-5 w-5 stroke-current' onClick={clickHandler} />
        </button>
    )
}

export default ButtonClose
