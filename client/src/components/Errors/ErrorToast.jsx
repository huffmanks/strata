const ErrorToast = ({ message }) => {
    return (
        <div className='relative'>
            <div className='fixed bottom-6 right-10 w-80 bg-primary-main p-4 rounded-lg text-center'>{message}</div>
        </div>
    )
}

export default ErrorToast
