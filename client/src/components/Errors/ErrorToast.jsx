import { MdClose } from 'react-icons/md'
const ErrorToast = ({ message, closeHandler }) => {
    return (
        <div className='bg-primary-main text-light-main absolute top-20 right-1 w-full max-w-xs rounded-lg p-3 shadow'>
            <div className='flex items-center'>
                <div className='pl-2 text-sm'>{message}</div>
                <button className='bg-dark-main hover:bg-primary-alt ml-auto h-8 w-8 rounded-lg p-1.5 outline-none' aria-label='close message' onClick={closeHandler}>
                    <MdClose className='fill-light-main h-5 w-5' />
                </button>
            </div>
        </div>
    )
}

export default ErrorToast
