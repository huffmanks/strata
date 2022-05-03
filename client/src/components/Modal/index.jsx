import ModalBody from './ModalBody'

import { MdOutlineClose } from 'react-icons/md'

const Modal = ({ isOpen, modalId, hasImage, imageSrc, imageAlt, imageSize, userEmail, message, confirmButton, cancelButton, closeHandler, confirmClickHandler }) => {
    return (
        <>
            <div className={`bg-dark-overlay fixed top-0 left-0 z-40 flex h-screen w-screen items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
                <div className='bg-dark-main relative h-full w-full max-w-md rounded-lg p-4 shadow md:h-auto'>
                    <button type='button' className='text-light-main hover:bg-primary-main absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm'>
                        <MdOutlineClose className='h-5 w-5 stroke-current' onClick={closeHandler} />
                    </button>
                    <ModalBody
                        modalId={modalId}
                        hasImage={hasImage}
                        imageSrc={imageSrc}
                        imageAlt={imageAlt}
                        imageSize={imageSize}
                        userEmail={userEmail}
                        message={message}
                        confirmButton={confirmButton}
                        cancelButton={cancelButton}
                        confirmClickHandler={confirmClickHandler}
                        cancelClickHandler={closeHandler}
                    />
                </div>
            </div>
        </>
    )
}

export default Modal
