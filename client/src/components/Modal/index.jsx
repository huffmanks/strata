import ModalBody from './ModalBody'

import { MdOutlineClose } from 'react-icons/md'

const Modal = ({ isOpen, hasImage, imageSrc, imageAlt, imageSize, userEmail, message, confirmButton, cancelButton, closeHandler, confirmClickHandler }) => {
    return (
        <>
            <div className={`bg-dark-main fixed top-0 left-0 z-40 flex h-screen w-screen items-center justify-center opacity-90 ${isOpen ? 'block' : 'hidden'}`}>
                <div className='relative h-full w-full max-w-md rounded-lg bg-[#000] p-4 shadow md:h-auto'>
                    <button type='button' className='text-light-main absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm hover:bg-neutral-800 '>
                        <MdOutlineClose className='h-5 w-5 stroke-current' onClick={closeHandler} />
                    </button>
                    <ModalBody
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
