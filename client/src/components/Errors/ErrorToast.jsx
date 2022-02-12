import { MdClose } from 'react-icons/md'
const ErrorToast = ({ message, closeHandler }) => {
    return (
        <div className='absolute top-5 right-4 w-full max-w-xs rounded-lg bg-primary-main p-4 text-light-main shadow'>
            <div className='flex items-center'>
                <div className='pl-4 text-sm'>{message}</div>
                <button className='ml-auto h-8 w-8 rounded-lg bg-dark-main p-1.5 outline-none hover:bg-primary-alt' aria-label='close message' onClick={closeHandler}>
                    <MdClose className='h-5 w-5 fill-light-main' />
                </button>
            </div>
        </div>
    )
}

export default ErrorToast
