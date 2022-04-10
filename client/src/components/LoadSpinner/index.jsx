const LoadSpinner = () => {
    return (
        <div className='bg-primary-main fixed top-0 left-0 z-40 flex h-screen w-screen items-center justify-center opacity-30'>
            <div className='load-spinner relative z-50 inline-block h-20 w-20'>
                <div className='border-light-main animate-loadSpinner absolute rounded-full border-4 opacity-100'></div>
                <div className='border-light-main animate-loadSpinner absolute rounded-full border-4 opacity-100'></div>
            </div>
        </div>
    )
}

export default LoadSpinner
