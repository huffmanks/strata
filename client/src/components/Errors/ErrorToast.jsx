import { MdClose } from 'react-icons/md'
const ErrorToast = ({ message, closeHandler }) => {
    return (
        <div className='absolute top-5 right-4 w-full max-w-xs p-4 bg-primary-main text-light-main rounded-lg shadow'>
            <div className='flex items-center'>
                <div className='pl-4 text-sm'>{message}</div>
                <button className='h-8 w-8 ml-auto p-1.5 bg-dark-main rounded-lg outline-none hover:bg-primary-alt' aria-label='close message' onClick={closeHandler}>
                    <MdClose className='w-5 h-5 fill-light-main' />
                </button>
            </div>
        </div>
    )
}

export default ErrorToast
