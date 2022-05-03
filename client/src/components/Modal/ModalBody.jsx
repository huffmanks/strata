import UserImage from '../Image/UserImage'

const ModalBody = ({ modalId, hasImage, imageSrc, imageAlt, userEmail, message, confirmButton, cancelButton, confirmClickHandler, cancelClickHandler }) => {
    return (
        <div className='p-6 text-center'>
            <div className={`mb-3 flex flex-col items-center justify-center ${hasImage ? 'gap-2' : 'gap-1'}`}>
                <UserImage hasImage={hasImage} imageSrc={imageSrc} imageAlt={imageAlt} imageSize={hasImage ? 20 : 24} />
                <div className='bg-dark-alt rounded-xl py-1 px-2 text-xs'>{userEmail}</div>
            </div>
            <div className='text-light-main mb-5 text-lg font-normal'>{message}</div>
            <div className='flex items-center justify-center gap-2'>
                <button
                    id={modalId}
                    type='button'
                    className='text-light-main bg-primary-main focus:ring-primary-main hover:bg-primary-alt rounded-lg px-5 py-2.5 text-sm focus:outline-none focus:ring-2'
                    onClick={confirmClickHandler}>
                    {confirmButton}
                </button>
                <button
                    type='button'
                    className='border-light-main text-light-main focus:ring-light-main rounded-lg border px-5 py-2.5 text-sm hover:border-neutral-800 hover:bg-neutral-800 focus:outline-none focus:ring-2'
                    onClick={cancelClickHandler}>
                    {cancelButton}
                </button>
            </div>
        </div>
    )
}

export default ModalBody
