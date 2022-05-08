import { useGlobalState } from '../../hooks/useContext'

import { MdOutlineClose } from 'react-icons/md'

const Modal = ({ children }) => {
    const { removeModal } = useGlobalState()

    const handleClose = () => {
        removeModal()
    }
    return (
        <>
            <div className='bg-dark-overlay fixed top-0 left-0 z-40 flex h-screen w-screen items-center justify-center'>
                <div className='bg-dark-main relative h-full w-full max-w-md rounded-lg p-4 shadow md:h-auto'>
                    <button type='button' className='text-light-main hover:bg-primary-main absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm'>
                        <MdOutlineClose className='h-5 w-5 stroke-current' onClick={handleClose} />
                    </button>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal
